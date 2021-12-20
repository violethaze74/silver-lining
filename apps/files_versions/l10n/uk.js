OC.L10N.register(
    "files_versions",
    {
    "Versions" : "Версії",
    "This application automatically maintains older versions of files that are changed." : "Цей застосунок підтримує роботу з попередніми версіями файлів, які було змінено.",
    "This application automatically maintains older versions of files that are changed. When enabled, a hidden versions folder is provisioned in every user’s directory and is used to store old file versions. A user can revert to an older version through the web interface at any time, with the replaced file becoming a version. The app automatically manages the versions folder to ensure the user doesn’t run out of Quota because of versions.\n\t\tIn addition to the expiry of versions, the versions app makes certain never to use more than 50% of the user’s currently available free space. If stored versions exceed this limit, the app will delete the oldest versions first until it meets this limit. More information is available in the Versions documentation." : "Цей застосунок автоматично обслуговує попередні версії файлів, які були змінені. Коли застосунок ввімкнено, у кожній теці користувача створюється прихована тека версій, у якій зберігаються старі версії файлів. Користувач за допомогою веб-інтерфейсу може повернутися у будь-який момент до однієї з попередніх версій файлу. При цьому файл, що замінюється, стає однією з версій. Застосунок також автоматично відслідковує теки версій, щоб задовольнити обмеження користувацьких квот.\n\t\tКрім відслідковування терміну збереження версій застосунок також забезпечує обмеження використаного версіями об'єму, щоб версії ніколи не використовували більше 50% доступного користувачу вільного дискового простору. В разі перевищення вказаних лімітів застосунок автоматично вилучає найдавніші версії аж до повернення в межі лімітів. Додаткова інформація доступна у документації до застосунку Версії.",
    "Failed to revert {file} to revision {timestamp}." : "Не вдалося повернути {file} до ревізії {timestamp}.",
    "_%n byte_::_%n bytes_" : ["%n байт","%n байти","%n байтів","%n байтів"],
    "Restore" : "Відновити",
    "No other versions available" : "Інші версії недоступні"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
