show databases;
use maked0nski;
show tables;
select * from cars;
-- найти все машины старше 2000 г
select * from cars where year >2000;
-- найти все машины млатше 2015 г
select * from cars where year < 2015;
-- найти все машины 2008, 2009, 2010 годов
select * from cars where year = 2008 or year = 2009 or year = 2010;
select * from cars where year >= 2008 and year <=2010;
select * from cars where year between 2008 and 2010;

-- найти все машины не с этих годов 2008, 2009, 2010 годов
select * from cars where year < 2008 or year > 2010;
select * from cars where year <> 2008 or year != 2009 or year != 2010;
-- найти все машины год которых совпадает с ценой
select * from cars where year = price;


-- найти все машины bmw старше 2014 года
select * from cars where model = 'bmw' and year > 2014;

-- найти все машины audi младше 2014 года
select * from cars where model = 'audi' and year < 2014;

-- найти первые 5 машин

select * from cars limit 5;

-- найти последнии 5 машин
select * from cars order by id desc limit 5;

-- найти среднее арифметическое цен машин модели KIA
select model, AVG(price) from cars where model = 'KIA';

-- найти среднее арифметическое цен каждой машины
select model, AVG(price) from cars group by model;

-- посчитать количество каждой марки машин
select  model, COUNT(model)as number_of_machines from cars group by model;

-- найти марку машины количество которых больше всего

# select * from cars where COUNT(model) >


-- найти все машины в модели которых вторая и предпоследняя буква "а"
select * from cars where model like '_a%a_';

-- найти все машины модели которых больше 8 символов
select * from cars where length(model) > 8;

-- ***найти машины цена которых больше чем цена среднего арифметического всех машин
select * from cars where price > (select AVG(price) from cars);



# 1.Вибрати усіх клієнтів, чиє ім'я має менше ніж 6 символів.
select * from client where length(FirstName) < 6;

# 2.Вибрати львівські відділення банку.
select * from department where DepartmentCity like 'Lviv';

# 3.Вибрати клієнтів з вищою освітою та посортувати по прізвищу.
select * from client where Education like 'high' order by LastName;

# 4.Виконати сортування у зворотньому порядку над таблицею Заявка і
# вивести 5 останніх елементів.
select * from application order by idApplication desc limit 5;

# 5.Вивести усіх клієнтів, чиє прізвище закінчується на OV чи OVA.
select * from client where LastName like '%ov' or '%ova';

# 6.Вивести клієнтів банку, які обслуговуються київськими відділеннями.
select * from client join department d on d.idDepartment = client.Department_idDepartment where DepartmentCity like 'Kyiv';

# 7.Знайти унікальні імена клієнтів.
# select distance(FirstName) from client

# 8.Вивести дані про клієнтів, які мають кредит більше ніж на 5000 тисяч гривень.

# 9.Порахувати кількість клієнтів усіх відділень та лише львівських відділень.

# 10.Знайти кредити, які мають найбільшу суму для кожного клієнта окремо.

# 11. Визначити кількість заявок на крдеит для кожного клієнта.

# 12. Визначити найбільший та найменший кредити.

# 13. Порахувати кількість кредитів для клієнтів,які мають вищу освіту.

# 14. Вивести дані про клієнта, в якого середня сума кредитів найвища.

# 15. Вивести відділення, яке видало в кредити найбільше грошей

# 16. Вивести відділення, яке видало найбільший кредит.

# 17. Усім клієнтам, які мають вищу освіту, встановити усі їхні кредити у розмірі 6000 грн.

# 18. Усіх клієнтів київських відділень пересилити до Києва.

# 19. Видалити усі кредити, які є повернені.

# 20. Видалити кредити клієнтів, в яких друга літера прізвища є голосною.

# 21.Знайти львівські відділення, які видали кредитів на загальну суму більше ніж 5000

# 22.Знайти клієнтів, які повністю погасили кредити на суму більше ніж 5000

# 23.Знайти максимальний неповернений кредит.

# 24.Знайти клієнта, сума кредиту якого найменша

# 25.Знайти кредити, сума яких більша за середнє значення усіх кредитів

# 26. Знайти клієнтів, які є з того самого міста, що і клієнт, який взяв найбільшу кількість кредитів

#  27. Місто клієнта з найбільшою кількістю кредитів
