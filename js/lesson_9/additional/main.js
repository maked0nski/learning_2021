// - Є масив :
    let courses = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 5,
            avgResult: 99
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 4.998,
            avgResult: 97
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'python core',
                'python advanced'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 4.812,
            avgResult: 98
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'QA/QC'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 4.65,
            avgResult: 97
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 4.772,
            avgResult: 100
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass'],
            logo: 'Blue-Big-Bird-Final-Logo.webp',
            price: 0,
            rating: 4.53,
            avgResult: 90
        }
    ];
//
// Створити під кожен елемент коремий блок. В цьому блоці, під кожну властивість, створити окремий блок.
// Для властивості modules зробити список в цьому ж  блоці (в якому знаходиться все)


// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// В цьому блоці, під кожну властивість, та властивості внутрішніх об'єктів створити свої окремі блок.
// Створити під кожен елемент окремий блок.

function checkTag(key) {
    switch (key) {
        case 'title':
            return 'h1';
        case 'monthDuration':
            return 'p';
        case 'hourDuration':
            return 'p';
        case 'modules':
            return 'ul';
        case 'logo':
            return 'img';
        case 'rating':
            return 'p';
        case 'avgResult':
            return 'p';
        case 'price':
            return 'div';
    }
}

function createElementDOM(tag = 'li', innerText = '', clasList = '', src) {
    let block = document.createElement(tag);
    block.innerText = (tag==='li' || tag==='h1')?(innerText):(`${clasList}  -  ${innerText}`);
    block.classList = clasList;
    block.src=src;
    return block;
}


let wrapBlock = document.createElement('div')
for (const course of courses) {
    let container = document.createElement('div')
    for (const courseKey in course) {
        if (courseKey === 'modules') {
            let courseElement = createElementDOM(checkTag(courseKey), 'Модулі які входять у вивчення курсу:', courseKey);
            for (const elementList of course[courseKey]) {
                courseElement.append(createElementDOM(undefined, elementList))
            }
            container.append(courseElement)
        } else if (courseKey === 'logo') {
            container.append(createElementDOM(checkTag(courseKey), undefined, courseKey, course[courseKey] ));
        } else {
            container.append(createElementDOM(checkTag(courseKey), course[courseKey], courseKey));
        }
    }
    wrapBlock.append(container)
}
document.body.append(wrapBlock)