show databases;
use maked0nski;
show tables;
select *
from cars;
-- найти все машины старше 2000 г
select *
from cars
where year > 2000;
-- найти все машины млатше 2015 г
select *
from cars
where year < 2015;
-- найти все машины 2008, 2009, 2010 годов
select *
from cars
where year = 2008
   or year = 2009
   or year = 2010;
select *
from cars
where year >= 2008
  and year <= 2010;
select *
from cars
where year between 2008 and 2010;

-- найти все машины не с этих годов 2008, 2009, 2010 годов
select *
from cars
where year < 2008
   or year > 2010;
select *
from cars
where year <> 2008
   or year != 2009
   or year != 2010;
-- найти все машины год которых совпадает с ценой
select *
from cars
where year = price;


-- найти все машины bmw старше 2014 года
select *
from cars
where model = 'bmw'
  and year > 2014;

-- найти все машины audi младше 2014 года
select *
from cars
where model = 'audi'
  and year < 2014;

-- найти первые 5 машин

select *
from cars
limit 5;

-- найти последнии 5 машин
select *
from cars
order by id desc
limit 5;

-- найти среднее арифметическое цен машин модели KIA
select model, AVG(price)
from cars
where model = 'KIA';

-- найти среднее арифметическое цен каждой машины
select model, AVG(price)
from cars
group by model;

-- посчитать количество каждой марки машин
select model, COUNT(model) as number_of_machines
from cars
group by model;

-- найти марку машины количество которых больше всего

select COUNT(model) as count, model
from cars
group by model
order by count desc
limit 1;

-- найти все машины в модели которых вторая и предпоследняя буква "а"
select *
from cars
where model like '_a%a_';

-- найти все машины модели которых больше 8 символов
select *
from cars
where length(model) > 8;

-- ***найти машины цена которых больше чем цена среднего арифметического всех машин
select *
from cars
where price > (select AVG(price) from cars);

# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select *
from client
where length(FirstName) < 6;

# 2.Вибрати львівські відділення банку.
select *
from department
where DepartmentCity like 'Lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select *
from client
where Education like 'high'
order by LastName;

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і
# вивести 5 останніх елементів.
select *
from application
order by idApplication desc
limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select *
from client
where LastName like '%ov'
   or '%ova';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select *
from client
         join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity like 'Kyiv';

# 7.Знайти унікальні імена клієнтів.
select DISTINCT FirstName
from client;

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.
select *
from client
         join application a on client.idClient = a.Client_idClient
where Sum > 5000;

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.
select COUNT(DepartmentCity) client_in_Lviv
from client
         join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity like 'Lviv';

# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.
# select * from client join application a on client.idClient = a.Client_idClient group by FirstName;
select max(Sum) as max_credit, client.*
from client
         join application a on client.idClient = a.Client_idClient
group by idClient;

# 11. Визначити кількість заявок на крдеит для кожного клієнта.
select count(*) as count_credet, client.*
from client
         join application a on client.idClient = a.Client_idClient
group by idClient;


# 12. Визначити найбільший та найменший кредити.
select min(Sum) as min, max(Sum)
from application;
# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.
select count(*) as count_credit
from application
         join client c on c.idClient = application.Client_idClient
where Education like 'high';

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.
select AVG(Sum) as avg, client.*
from client
         join application a on client.idClient = a.Client_idClient
group by idClient
order by avg desc
limit 1;

# 15. Вивести відділення, яке видало в кредити найбільше грошей
select SUM(Sum) as money, idDepartment, DepartmentCity
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment, DepartmentCity
order by money desc
limit 1;

# 16. Вивести відділення, яке видало найбільший кредит.
select MAX(Sum) as creditSum, idDepartment, DepartmentCity
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
group by idDepartment
order by creditSum desc
limit 1;

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.
update application join client c on c.idClient = application.Client_idClient
set Sum=6000
where Education like 'high';

select Sum, client.*
from client
         join application a on client.idClient = a.Client_idClient
where Education like 'high';

# 18. Усіх клієнтів київських відділень пересилити до Києва.
update client
    join department d on d.idDepartment = client.Department_idDepartment
set City = 'Kyiv'
where DepartmentCity = 'Kyiv';

select *
from client
         join department d on d.idDepartment = client.Department_idDepartment
where DepartmentCity = 'Kyiv';

# 19. Видалити усі кредити, які є повернені.
delete application
from application
where CreditState = 'Returned';

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.
delete application
from application
         join client c on c.idClient = application.Client_idClient
where LastName regexp '^.[eyuoa].*';

# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000
select SUM(Sum) as money, idDepartment, DepartmentCity
from department
         join client c on department.idDepartment = c.Department_idDepartment
         join application a on c.idClient = a.Client_idClient
where DepartmentCity = 'Lviv'
  and Sum > 5000
group by idDepartment, DepartmentCity;

# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000
select client.*
from client
         join application a on client.idClient = a.Client_idClient
where CreditState = 'Returned' and Sum>5000;

# 23.Знайти максимальний неповернений кредит.
select MAX(Sum)
from application
where CreditState = 'Not returned';

# 24.Знайти клієнта, сума кредиту якого найменша
select client.*, Sum
from client
join application a on client.idClient = a.Client_idClient
order by Sum desc
limit 1;


# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів
select *
from application
where Sum > (select avg(Sum) from application);

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів
select *
from client
where City = (
    select c.City
    from client c
             join application a on c.idclient = a.client_idclient
    group by idclient
    order by count(idapplication) desc
    limit 1
);

# 27. Місто клієнта з найбільшою кількістю кредитів
select c.City
from client c
         join application a on c.idclient = a.client_idclient
group by idclient
order by count(idapplication) desc
limit 1;