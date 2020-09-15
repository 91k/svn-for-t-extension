var $tpls = {
    3: ["Изображение", "IM01"],
    4: ["Видео с Youtube", "VD01"],
    14: ["Обложка: заголовок и описание", "CR02"],
    16: ["Видео HTML5", "VD05"],
    18: ["Обложка: заголовок, подзаголовок и раздел", "CR01"],
    22: ["Две колонки", "CL02"],
    23: ["Текст среднего размера", "IP203"],
    24: ["Три колонки", "CL03"],
    30: ["Заголовок: 64", "TL02"],
    31: ["Четыре колонки", "CL04"],
    33: ["Заголовок: 36", "TL03"],
    36: ["Крупный текст с тонкими разделителями", "IP201"],
    37: ["Узкий текстовый блок", "TX05"],
    40: ["Заголовок: 14", "TL05"],
    43: ["Заголовок: 36", "TL03A"],
    46: ["Обложка: заголовок и подзаголовок", "CR04"],
    47: ["Подзаголовок с разделителем и вводный текст", "CL06"],
    49: ["Подзаголовок и текст", "CL07"],
    50: ["Текст среднего размера", "IP301"],
    56: ["Мелкий текст", "TX08"],
    60: ["Заголовок: 82", "TL01"],
    61: ["Текст по центру", "TX09"],
    65: ["Заголовок: 24", "TL06"],
    66: ["Крупный текст", "IP302"],
    67: ["Текст на цветном фоне", "IP303"],
    70: ["Тонкая вертикальная линия", "DV03"],
    71: ["Тильда", "DV04"],
    86: ["Ключевые параметры в колонках", "CL12"],
    92: ["Персона", "QT02"],
    94: ["Изображение с текстом на полях", "IM04"],
    101: ["Средний текст жирного начертания с разделителями", "IP401"],
    102: ["Цитата", "QT04"],
    106: ["Текст", "TX01"],
    111: ["Системный комментарий", "T218"],
    113: ["Дополнительный отступ", "DV05"],
    114: ["Логотип на фоне", "CR06"],
    117: ["Квадратная картинка и квадратный текстовый блок", "TE205"],
    121: ["Alias-блок", "T213"],
    123: ["SoundCloud", "T153"],
    124: ["Видео с Vimeo", "VD03"],
    125: ["Карта Google или Yandex", "T143"],
    126: ["Линия", "DV01"],
    127: ["Лид (вводный текст)", "TX02"],
    128: ["Заголовок: 28", "TL04"],
    131: ["HTML-код", "T123"],
    132: ["Стандартные кнопки социальных сетей", "SN202"],
    134: ["Оглавление", "IX06"],
    139: ["Прямая речь", "QT01"],
    142: ["Полноэкранная сетка", "IX04"],
    144: ["Лого и текст по центру", "FT101"],
    145: ["Лого в верхнем углу", "ME101"],
    147: ["Изображения в три колонки", "GL03"],
    150: ["Последовательность слайдов видео и изображений", "GL06"],
    151: ["Кнопки поделиться в соц. сетях", "SN201"],
    155: ["Текст и логотипы", "CL17"],
    156: ["Четыре колонки с заголовками", "CL18"],
    158: ["Цифра в круге", "DV06"],
    159: ["Изображение в круге", "IM08"],
    160: ["Полноэкранное изображение", "IM02"],
    162: ["Линия и цифра в круге", "DV07"],
    163: ["Линия с открывающей кавычкой", "DV08A"],
    164: ["Линия с закрывающей кавычкой", "DV08B"],
    165: ["Персона", "QT03"],
    167: ["Обложка: заголовок, подзаголовок и раздел", "CR07"],
    168: ["Обложка: заголовок, подзаголовок и раздел", "CR08"],
    169: ["Комбинация изображений", "GL04"],
    170: ["Изображения в одну строку", "GL05"],
    171: ["Цитата", "QT07"],
    172: ["Текст среднего размера", "IP101"],
    173: ["Цитата", "QT08"],
    179: ["Текстовый блок на фоне изображения или видео", "TX14"],
    180: ["Изображение справа и текст слева", "CL22"],
    181: ["Текст и сноска", "CL05"],
    182: ["Текст, обтекающий изображение", "IM13"],
    184: ["Крупный текст жирного начертания", "IP402"],
    186: ["Текстовый лейбл в верхнем углу", "ME102"],
    191: ["Кнопка", "BF101"],
    192: ["Обложка: заголовок, подзаголовок и раздел", "CR10"],
    193: ["Значимое изображение и текстовый блок", "CL23"],
    194: ["Текст в две колонки", "CL27"],
    195: ["Текст и изображение в две колонки", "CL24"],
    196: ["Две колонки", "CL28"],
    200: ["Кнопка Play", "VD04"],
    204: ["Обложка с одной или двумя кнопками", "CR15"],
    205: ["Обложка с одной или двумя кнопками", "CR16"],
    206: ["Обложка с одной или двумя кнопками", "CR17"],
    207: ["Обложка: заголовок, подзаголовок и раздел", "CR11"],
    208: ["Две или три кнопки", "BF102"],
    209: ["Строка текста и кнопка", "BF301"],
    210: ["Форма с одним полем для ввода", "BF201"],
    212: ["Ссылки на соцсети", "SN101"],
    213: ["Обложка с одной или двумя кнопками", "CR12"],
    215: ["Якорная ссылка", "T173"],
    217: ["Кнопка наверх", "BF702"],
    218: ["Две колонки", "CL01"],
    219: ["Короткая линия", "DV01A"],
    220: ["Три колонки с цифрами", "CL19"],
    222: ["Текст с изображением и описанием на полях", "IM11"],
    223: ["Текст и изображение", "IM10"],
    224: ["Изображение и описание на полях", "IM07"],
    229: ["Обложка: цифра и заголовок", "CR18"],
    230: ["Фиксированное меню: логотип, ссылки и переключение языка", "ME204"],
    232: ["Текст на белой подложке", "TX15"],
    233: ["Фиксированное меню гамбургер для постов в блоге", "ME404"],
    237: ["Текст на картинке с длинным скроллом ", "IM05"],
    238: ["Ключевая фраза на картинке с длинным скроллом ", "IM06"],
    239: ["Текст и ключевая фраза", "TX10"],
    241: ["Переключатель цвета фона. Плавная смена цвета ", "DV11A"],
    244: ["Обложка: логотип, заголовок и подзаголовок", "CR19"],
    246: ["Полноэкранное квадратное изображение и квадратный текстовый блок", "CL16"],
    247: ["Disqus Comments", "T158"],
    248: ["Текст на серой карточке", "TX13"],
    251: ["Два Youtube плеера", "VD06"],
    255: ["Заголовок: 52", "TL02A"],
    256: ["Изображение и текст с плавающим эффектом", "CL26"],
    257: ["Универсальное меню с логотипом слева", "ME301"],
    258: ["Меню в одну линию", "ME103"],
    259: ["Текст и youtube видео в две колонки", "VD08"],
    260: ["Заголовок в квадрате", "DV09"],
    263: ["Превращает страницу в презентацию", "T203"],
    266: ["Coub", "VD07"],
    267: ["Заголовок и раскрывающийся текст", "TX12"],
    268: ["CallbackHunter Виджет", "T128"],
    269: ["JivoSite Виджет", "T133"],
    270: ["Плавный скролл до локальной якорной ссылки", "T178"],
    271: ["Текст с шарингом в Twitter", "IP403"],
    272: ["Цитата с декоративной кавычкой", "QT11"],
    273: ["Цитата с кавычкой и автором", "QT12"],
    274: ["Обложка с автором и датой", "CR20"],
    275: ["Обложка с заголовком и кнопкой Play", "CR21"],
    276: ["Текст с двойной рамкой", "IP404"],
    278: ["Цитата с висящей кавычкой", "QT15"],
    279: ["Полноэкранная комбинация из трех изображений ", "GL07"],
    282: ["Обложка с текстом на плашке", "CR28"],
    285: ["Поле с кодом", "TX19"],
    286: ["Обложка с кнопкой Play, заголовком и подзаголовком", "CR22"],
    287: ["Три изображения и текст на подложке", "AB901"],
    288: ["Обложка с полем ввода", "CR26"],
    289: ["Обложка с выделенным текстом", "CR27"],
    292: ["Форма для подписки", "BF306"],
    295: ["Цитата с кавычкой", "QT16"],
    296: ["Заметка на подложке", "TX20"],
    303: ["Подсказка для ссылки", "T198"],
    305: ["Переадресация на URL", "T223"],
    309: ["Полноэкранное меню гамбургер", "ME401"],
    312: ["Typeform", "BF601"],
    315: ["Hyper Comments", "T163"],
    316: ["Popup: форма подписки", "BF501"],
    327: ["Меню гамбургер на половину экрана ", "ME402"],
    331: ["Popup: Youtube", "VD09"],
    336: ["Ссылка на материал и информация", "TE105"],
    337: ["Обложка с фото автора", "CR31"],
    338: ["Обложка: логотип, заголовок и подзаголовок + кнопка", "CR19A"],
    344: ["Панель с cсылками в 4 колонки", "FT301"],
    345: ["Панель: текст и иконки соц. сетей", "FT201"],
    347: ["Видео Youtube c обложкой", "VD11"],
    354: ["Триггер: Показывать поп-ап при скролле", "T183"],
    355: ["Chatra Виджет", "T138"],
    356: ["Интервью: вопрос / ответ", "TX21"],
    358: ["Popup: Vimeo", "VD10"],
    360: ["Эффект загрузки страницы", "T228"],
    363: ["Линия с полупрозрачными краями", "DV02N"],
    364: ["Popup: Facebook social plugin", "SN401"],
    365: ["Popup: VKontakte social plugin", "SN402"],
    367: ["Триггер: Показывать поп-ап по таймеру", "T188"],
    368: ["Видео слева и изображение справа", "VD12"],
    370: ["Поиск по сайту от Гугла", "T148"],
    372: ["Текст с линией", "IP405"],
    373: ["Текст с цифрой в кружке", "TX22"],
    374: ["Ссылка c иконкой", "TE500"],
    375: ["Три ромба", "DV10"],
    376: ["Переключатель цвета фона", "DV11"],
    377: ["Печать: разрыв страницы", "T208"],
    378: ["Два Vimeo плеера", "VD06A"],
    380: ["Ecwid: товары из категории", "T380"],
    381: ["Кнопки поделиться в соц. сетях, зафиксированные в углу", "SN203"],
    383: ["Модификатор: активный пункт меню", "ME701"],
    386: ["Цитаты с картинкой снизу и текстом на фоне", "QT19"],
    388: ["Логотипы партнеров на фоне", "PR401"],
    389: ["Панель: копирайт, строка ссылок и кнопка наверх", "FT202"],
    390: ["Popup: information", "BF503"],
    391: ["Обложка с кнопками Apple Store и Google Play", "CR33"],
    392: ["Кнопки App Store и Google Play", "BF801"],
    393: ["Кнопка зафиксированная в углу", "BF701"],
    394: ["Модификатор: стиль ссылок", "T193"],
    395: ["Вкладки с цветом фона", "ME602"],
    396: ["Нулевой Блок", "T396"],
    397: ["Вкладки с обводкой снизу", "ME603"],
    400: ["Кнопка: показать еще", "BF703"],
    401: ["Сетка для блога или портфолио", "IX07"],
    403: ["Сетка блога", "IX01"],
    404: ["Сетка для блога или портфолио", "IX02"],
    405: ["Сетка для советуемых также материалов", "IX03"],
    406: ["Слайдер с баннерами", "IX05"],
    407: ["Кнопки: предыдущий и следующий пост", "TE300"],
    408: ["Ключевые параметры в колонках c фоновой картинкой", "FR502"],
    409: ["Фрагмент картинки и колонка с текстом", "CL25"],
    410: ["Сравнение картинок до/после", "GL09"],
    411: ["Обложка с таймером и формой подписки", "CR34"],
    412: ["Три вертикальных блока в рамках", "CL10"],
    415: ["Обложка с таймером и кнопками", "CR35"],
    416: ["Виджет TimePad", "T152"],
    418: ["Слайдер картинок", "GL10"],
    420: ["Панель: логотип, иконки соц. сетей, копирайт и ссылки в 3 колонки", "FT302"],
    422: ["Карточка: текст и изображение", "TE400"],
    424: ["Карточка: изображение и текст друг под другом", "TE405"],
    430: ["Кнопка (кнопки) с иконкой", "BF802"],
    431: ["Таблица", "CL46"],
    432: ["Кнопка (кнопки) Скачать с уточнением формата", "BF803"],
    433: ["Карта Google или Яндекс и блок контактов", "CN402A"],
    442: ["Кнопка: иконка и текст со ссылкой", "BF804"],
    446: ["Универсальное меню с логотипом по центру", "ME302"],
    447: ["Панель: копирайт, ссылки в 3 колонки, иконки соц. сетей и форма для подписки", "FT304"],
    448: ["Обложка для приложения или сервиса: скриншот, заголовок, описание, кнопка", "CR23"],
    449: ["Кнопки социальных сетей: выровненные по центру экрана и зафиксированные сбоку", "SN301"],
    450: ["Скрытое меню с гамбургером", "ME403"],
    451: ["Меню с иконкой гамбургер, скрытыми пунктами, логотипом, кнопками поделиться и социальными сетями", "ME405"],
    452: ["Панель: копирайт, иконки соц. сетей и кнопка наверх", "FT203"],
    453: ["Фиксированное сбоку вертикальное меню", "ME502"],
    454: ["Меню с логотипом по центру", "ME202"],
    455: ["Иконки соц. сетей с фоновой картинкой", "FT401"],
    456: ["Меню с логотипом слева", "ME201"],
    457: ["Строка ссылок и копирайт", "FT102"],
    460: ["Панель: большие иконки соц. сетей и копирайт", "FT501"],
    461: ["Универсальное меню с логотипом над пунктами меню ", "ME303"],
    462: ["Меню с логотипом над пунктами меню", "ME203"],
    463: ["Панель: логотип, копирайт и иконки соц. сетей", "FT204"],
    464: ["Панель: логотип, копирайт и ссылки в 2 колонки", "FT303"],
    465: ["Ссылки на соцсети на всю ширину экрана", "SN501"],
    466: ["Минималистичное меню с логотипом, ссылками и описанием", "ME501"],
    467: ["Заголовок и описание", "AB102"],
    468: ["Надзаголовок, заголовок и описание", "AB103"],
    469: ["Большой заголовок, линия-разделитель и описание", "AB104"],
    470: ["Маленький заголовок, описание и картинка на фоне", "AB107"],
    471: ["Описание и иконки соц. сетей", "AB108"],
    472: ["Заголовок, описание и три изображения", "AB201"],
    473: ["Маленький заголовок и большое описание", "AB106"],
    474: ["Большое описание", "AB101"],
    475: ["Карточка с заголовком и описанием на цветном фоне", "AB801"],
    476: ["Карточка с заголовком и описанием на фоновом изображении", "AB802"],
    477: ["Две колонки с картинкой и текстом на фоне", "AB606"],
    478: ["Две колонки с картинкой и текстом", "AB605"],
    479: ["Заголовок, описание и youtube видео", "AB701"],
    480: ["Две колонки с картинкой и текстом", "AB603"],
    481: ["Универсальное меню в 12 колонок", "ME304"],
    482: ["Средний заголовок, линия-разделитель и описание", "AB105"],
    483: ["Большое описание и контакты", "AB302"],
    484: ["Надзаголовок, большой заголовок и контакты", "AB301"],
    485: ["Надзаголовок, заголовок, изображение и описание", "AB401"],
    486: ["Две колонки с четырьмя картинками и текстом", "AB604"],
    487: ["Изображение в круге, заголовок, подзаголовок и описание", "AB402"],
    488: ["Надзаголовок и большое описание", "AB501"],
    489: ["Заголовок, подзаголовок и описание в две колонки", "AB601"],
    490: ["Колонки с большими иконками", "FR201"],
    491: ["Колонки с маленькими иконками", "FR205"],
    492: ["Полноэкранное квадратное изображение и квадратный текстовый блок", "AB602"],
    493: ["Изображение и карточки (иконка, заголовок, описание)", "FR302"],
    494: ["Контакты с иконками соц. сетей наверху", "CN104"],
    495: ["Колонки с цифрами и горизонтальными линиями", "FR402"],
    497: ["Две колонки с маленькими иконками", "FR204"],
    498: ["Колонки с большими иконками и вертикальными линиями", "FR202"],
    499: ["Две колонки с большими иконками справа", "FR203"],
    500: ["Карточки (иконка, заголовок, описание) в две колонки и изображение по центру", "FR303"],
    501: ["Колонки с цифрами и горизонтальными линиями", "FR403"],
    502: ["Колонки с цифрами в кружочках", "FR401"],
    503: ["Колонки с маленькими иконками над текстом", "FR206"],
    504: ["Колонки с маленькими цифрами и вертикальными линиями", "FR404"],
    505: ["Колонки с круговыми диаграммами", "FR405"],
    506: ["Колонки с цифрами на фоновым изображении", "FR501"],
    508: ["Список с галочками", "FR101"],
    509: ["Список с изображениями", "FR301"],
    510: ["Список с цифрами в кружках", "FR103"],
    512: ["Список с иконками", "FR102"],
    513: ["Две колонки с горизонтальными линиями и информацией о персоне", "TB102"],
    514: ["Таймлайн", "TB201"],
    516: ["Таймлайн с изображениями", "TB202"],
    517: ["Карточки в три колонки", "TB301"],
    518: ["Карточки в три колонки", "TB302"],
    521: ["Две колонки", "TB101"],
    522: ["Две колонки с горизонтальными линиями и большим изображением в кружке", "TB104"],
    523: ["Две колонки с большим изображением", "TB103"],
    524: ["Персоны: изображение в кружке и информация", "TM101"],
    525: ["Отзывы в две колонки", "TS201"],
    526: ["Персоны: изображение в кружке и информация", "TM103"],
    527: ["Персоны: квадратное изображение и информация с линией-разделителем", "TM201"],
    528: ["Отзывы в три колонки", "TS202"],
    529: ["Отзывы в две колонки на speech bubbles", "TS204"],
    530: ["Отзывы на speech bubbles", "TS205"],
    531: ["Персоны: квадратное изображение и информация в списке", "TM301"],
    532: ["Персоны: квадратное изображение с информацией при наведении", "TM401"],
    533: ["Отзывы с картинкой сверху и текстом на фоне", "TS203"],
    537: ["Персоны: квадратное изображение и информация", "TM102"],
    539: ["Персоны: квадратное изображение и информация в карточках", "TM402"],
    542: ["Один человек: фоновое изображение и информация", "TM501"],
    543: ["Один человек: фоновое изображение и информация в карточке", "TM502"],
    544: ["Один человек: две колонки с картинкой и текстом", "TM601"],
    545: ["Один человек: две колонки с картинкой и текстом на фоне", "TM602"],
    546: ["Один человек: полноэкранное квадратное изображение и квадратный текстовый блок", "TM603"],
    547: ["Центрированный таймлайн с буллетами", "HW101"],
    548: ["Таймлайн с картинками", "HW201"],
    549: ["Блоки со стрелочками", "HW302"],
    550: ["Таймлайн с цифрами слева", "HW202"],
    551: ["Контакты с заголовком и крупными телефоном и e-mail", "CN106"],
    552: ["Полноэкранная комбинация из изображений в колонках", "GL11"],
    554: ["Карта с карточкой", "CN403"],
    555: ["Контакты и карта в две колонки", "CN401"],
    557: ["Let it snow block", "NY2018"],
    558: ["Список отзывов", "TS207"],
    560: ["Контакты с заголовком", "CN102"],
    561: ["Фоновое изображение и контакты в карточке", "CN201"],
    562: ["Контакты в колонках", "CN301"],
    563: ["Блоки с таймлайном", "HW301"],
    564: ["Контакты в одну колонку с логотипом и маленькими заголовками", "CN109"],
    565: ["Центрированный таймлайн с цифрами", "HW102"],
    566: ["Блоки с цифрами слева", "HW401"],
    567: ["Контакты в колонках с иконками", "CN302"],
    568: ["Блоки с цифрами сверху", "HW402"],
    569: ["Блоки с иконками и разрывистой линией", "HW303"],
    570: ["Контакты и карта в две колонки", "CN402"],
    571: ["Контакты с крупным адресом", "CN105"],
    572: ["Контакты с заголовком и описанием", "CN101"],
    573: ["Контакты с крупными телефоном и e-mail", "CN103"],
    574: ["Контакты с заголовком и крупным адресом", "CN107"],
    575: ["Блоки с цифрами сверху с выравниванием по левому краю", "HW403"],
    576: ["Центрированный таймлайн с цифрами и картинками", "HW103"],
    577: ["Блоки с карточками", "HW404"],
    578: ["Контакты с информацией о персоне", "CN108"],
    580: ["Блок призыва к действию: заголовок, описание и кнопки", "BF302"],
    581: ["Блок призыва к действию: заголовок, описание, кнопка и фоновое изображение", "BF303"],
    582: ["Фиксированная форма подписки", "BF907"],
    585: ["Текст в раскрывающихся блоках", "TX16N"],
    588: ["Блок призыва к действию: текст и большая кнопка", "BF305"],
    589: ["Изображение, текст и кнопки в две колонки", "BF401"],
    592: ["Карточки с тарифами", "PL100"],
    594: ["Логотипы в колонках", "PR101"],
    595: ["Логотипы в колонках, разделенные линиями", "PR102"],
    596: ["Информация о партнерах в две колонки", "PR302"],
    598: ["Разделенные карточки с иконкой, ценой и описанием", "PL102"],
    599: ["Карточки с ценой и описанием", "PL105"],
    600: ["Список партнеров", "PR301"],
    602: ["Индикатор прокрутки страницы", "T333"],
    603: ["Полноэкранная комбинация из изображений с отступами", "GL12"],
    604: ["Галерея с превью боковых фото", "GL20"],
    605: ["Слайдер с отзывами с картинкой сверху", "TS101N"],
    607: ["Навигация с точками", "ME604"],
    608: ["Карточки с картинкой, текстом и ценами", "PL125"],
    609: ["Карточки с ценой на картинке и описанием", "PL115"],
    611: ["Таблица с ценами на цветном фоне", "PL200"],
    612: ["Простая таблица с ценами", "PL205"],
    613: ["Простая таблица с ценами на цветном фоне", "PL210"],
    614: ["Таблица с ценами и цветными рядами", "PL215"],
    615: ["Карточки с иконкой, ценой и описанием", "PL110"],
    616: ["Карточки с ценами на цветном фоне", "PL120"],
    635: ["Эффект печатной машинки", "T635"],
    649: ["Картинка и текст в колонках", "TE210"],
    650: ["Колонки с простыми карточками", "TE600"],
    651: ["Виджет для заказа обратного звонка", "BF901"],
    653: ["Виджет с формой подписки", "BF903"],
    654: ["Панель для анонса", "BF906"],
    657: ["Уведомление об использовании куки", "T657"],
    658: ["Предупреждение о возрастном ограничении", "T658"],
    659: ["Слайдер с отзывами на обложке", "TS301N"],
    660: ["Комбинация квадратных изображений", "GL13"],
    661: ["Комбинация больших и маленьких изображений", "GL14"],
    662: ["Комбинация из вертикальных и горизонтальных изображений", "GL15"],
    663: ["Вертикальный список изображений", "GL17"],
    664: ["Вопросы и ответы в рамках", "TX17N"],
    665: ["Вопросы и ответы в виде чата", "TX18N"],
    667: ["Изображения в две колонки", "GL02"],
    668: ["Текст в раскрывающихся блоках на цветном фоне", "TX16N2"],
    670: ["Галерея", "GL01"],
    672: ["Текст на карточке", "IP102"],
    673: ["Текст в карточке с обводкой", "IP103"],
    674: ["Модификатор: добавление фонового изображения для всей страницы", "T674"],
    675: ["Галерея на весь экран", "GL19"],
    676: ["Текст с разделителями-волнами", "IP202"],
    677: ["Комбинация изображений и текст", "AB902"],
    678: ["Вертикальная форма с множеством полей", "BF204N"],
    680: ["Комбинация квадратных изображений (одно большое и 4 маленьких)", "GL16"],
    681: ["Цены и информация", "PL300"],
    684: ["Попап с виджетом TimePad", "T151N"],
    686: ["Ссылки на материалы в колонках. Появление информации при наведении", "TE100"],
    688: ["Картинка и текст в колонках", "TE215"],
    690: ["Форма с несколькими полями для ввода", "BF203N"],
    692: ["Ссылки на следующие материалы в две колонки", "TE200"],
    694: ["Ссылки на материалы в полноэкранные колонки с появлением информации при наведении", "TE110"],
    696: ["Карточка с формой захвата", "BF310N"],
    698: ["Форма на обложке с множеством полей", "BF311N"],
    700: ["Изображение/Youtube видео и форма в двух колонках", "BF402N"],
    702: ["Popup: форма с множеством полей", "BF502N"],
    704: ["Форма захвата", "BF307N"],
    706: ["Корзина с формой заказа", "ST100"],
    708: ["Виджет для отправки сообщения", "BF902N"],
    712: ["Обложка с формой справа", "CR32N"],
    716: ["Обложка с несколькими полями для ввода", "CR26AN"],
    718: ["Контакты и форма в две колонки", "CN501N"],
    720: ["Форма захвата на фоновом изображении", "BF308N"],
    722: ["Карточка с формой захвата на фоновом изображении", "BF309N"],
    724: ["Триггер: Показывать поп-ап при закрытии окна", "T723"],
    726: ["Слайдер с отзывами с картинкой снизу", "TS102N"],
    728: ["Слайдер с карточками отзывов", "TS103N"],
    730: ["Слайдер с отзывами на обложке", "TS302N"],
    734: ["Промо слайдер", "CR30N"],
    738: ["Логотипы в слайдере", "PR201N"],
    740: ["Галерея c колонкой текста", "CL20N"],
    744: ["Карточка продукта", "ST200"],
    746: ["Popup: Галерея", "GL08N"],
    750: ["Горизонтальный popup: карточка товара", "ST510"],
    754: ["Карточки продуктов + Popup с подробной информацией", "ST300"],
    756: ["Popup: карточка товара", "ST500"],
    758: ["Хлебные крошки", "ME605"],
    760: ["Карточка продукта с залипающей информацией", "ST210"],
    762: ["Карточка продукта на всю ширину окна", "ST205"],
    764: ["Галерея с текстовой информацией", "GL21"],
    766: ["Popup: карточка товара", "ST505"],
    770: ["Меню с двумя описаниями", "ME203A"],
    772: ["Изображение, текст и кнопки в колонках", "TE220"],
    774: ["Изображение, текст и кнопки в колонках с фоном", "TE225"],
    776: ["Карточки продуктов с кнопками + Popup с подробной информацией", "ST305N"],
    778: ["Карточки продуктов с кнопками и фоном + Popup с подробной информацией", "ST310N"],
    780: ["Вертикальная карточка продукта", "ST405"],
    782: ["Платежная система. Прямая оплата без корзины", "ST105"],
    784: ["Заголовок, цена и кнопка", "ST400N"],
    786: ["Колонки с продуктами на всю ширину экрана + Popup с подробной информацией", "ST315N"],
    790: ["Виджет YCLIENTS для онлайн-записи", "T790"],
    792: ["Цены и информация с горизонтальными линиями", "PL305"],
    794: ["Меню: второй уровень", "ME601"],
    795: ["Заголовок: 42, для секций", "TL02B"],
    796: ["Фигурная граница ", "DV12"],
    797: ["Блок для оценки или голосования (Beta)", "BF908"],
    798: ["Слайдер с отзывами с картинкой слева и текстом справа", "TS206N"],
    799: ["Галерея и текстовая колонка с кнопкой", "CL21N"],
    801: ["Слайдер: Текст и изображение", "CL34N"],
    802: ["Лента инстаграм", "SN403"],
    803: ["Мультилендинг: динамический текст по параметрам в URL", "T803"],
    804: ["Геолендинг: динамический текст по Геопозиции", "T804"],
    805: ["Переадресация по языку", "T805"],
    806: ["Тест", "BF918"],
    807: ["Опрос или голосование", "BF913"],
    808: ["Переадресация по геопозиции", "T808"],
    809: ["Мультилендинг: скрыть/показать блок по параметру в URL", "T809"],
    810: ["Геолендинг: скрыть/показать блок по Геопозиции", "T810"],
    811: ["Форма для приема взносов", "BF923"],
    812: ["Цены и информация с горизонтальными линиями", "PL310"],
    813: ["Обложка с изображением/Youtube видео и формой в двух колонках", "CR36"],
    814: ["Комбинация изображения и текста", "AB607"],
    815: ["Плашка с логотипом и телефоном", "ME801"],
    816: ["Комбинация изображений со смещением", "GL22"],
    817: ["Вкладки с контентом", "CL47"],
    819: ["Вкладки с контентом", "CL48"],
    820: ["Две колонки с галочками", "FR207"],
    821: ["Плашка с логотипом, телефоном, адресом и кнопкой", "ME802"],
    822: ["Карточки с текстом в три колонки с разделителем", "CL49"],
    823: ["Изображение и форма в двух колонках", "BF403"],
    824: ["Виджет с номером телефона", "BF904"],
    825: ["Виджет с мессенджерами", "BF905"],
    826: ["Эффект галактики для обложек", "T826"],
    827: ["Masonry gallery", "GL23"],
    828: ["Обложка с расписанием", "CR37"],
    829: ["Изображение, текст и кнопки в плиточной раскладке", "TE700"],
    830: ["Фиксированное боковое меню с подразделами", "ME901"],
    833: ["Анимированное слайдшоу для обложек", "T833"],
    835: ["Пошаговая форма", "BF919"],
    837: ["Ecwid: интернет-магазин", "T301"],
    838: ["Поиск по сайту", "T838"],
    839: ["Мультилендинг: скрыть/показать блок по Языку пользователя", "T839"],
    841: ["Две колонки с галочками", "SV303"],
    842: ["Карточки с картинкой и текстом в две колонки", "SV306"],
    843: ["Список с изображениями в две колонки", "SV101"],
    844: ["Колонки с иконками", "SV201"],
    845: ["Две колонки с маленькими иконками", "SV302"],
    846: ["Список с иконками", "SV307"],
    847: ["Изображение справа и текст слева", "SV102"],
    848: ["Две колонки", "SV301"],
    849: ["Текст в раскрывающихся блоках", "SV501"],
    850: ["Колонки с простыми карточками", "SV203"],
    851: ["Карточки с появлением информации при наведении", "SV401"],
    852: ["Изображение, текст и кнопки в колонках", "SV405"],
    853: ["Карточки с картинкой, заголовком и текстом", "SV402"],
    854: ["Канал новостей", "T854"],
    855: ["Список с заголовком и текстом", "SV304"],
    856: ["Карточки с заголовком на картинке и текстом", "SV403"],
    857: ["Карточки с картинкой, заголовком сверху и текстом", "SV404"],
    858: ["Колонки с простыми карточками и иконками", "SV202"],
    859: ["Две колонки с иконками слева", "SV305"],
    860: ["Карточки с текстом", "SV406"],
    862: ["Popup: пошаговая форма", "BF920"],
    865: ["Комментарии из Facebook и Vkontakte", "SN601"],
    868: ["HTML-код в попапе", "T868"],
    875: ["Защита контента от копирования", "T875"],
    881: ["YouTube-трансляция с комментариями", "VD13"],
    884: ["Виджет Carrot Quest", "T884"],
    886: ["Уведомление об использовании куки", "T886"],
    887: ["Уведомление об использовании куки", "T887"],
    889: ["Изображение со смещённой карточкой", "AB608"],
    891: ["Узкая обложка с заголовком и описанием", "CR40"],
    896: ["Поток: В линию для новостей или блога", "FD101"],
    897: ["Поток: Сетка для новостей или блога", "FD301"],
    898: ["Виджет с мессенджерами", "BF905A"],
    899: ["Колонки с символами на фоне", "FR406"],
    902: ["Карточки с расширенными настройками", "TE230"],
    903: ["Обложка с расписанием", "CR38"],
    905: ["Карточки в две колонки", "FR208"],
    906: ["Обложка с заголовком и кнопкой Play", "CR41"],
    908: ["Вкладки с изображениями", "FR304"],
    909: ["Полноэкранная комбинация больших и маленьких изображений", "GL24"],
    910: ["Обложка: заголовок, подзаголовок и раздел", "CR42"],
    911: ["Контакты с изображением, заголовком и описанием", "CN202"],
    912: ["Изображение, текст и кнопки со смещением", "TE720"],
    915: ["Поток: Сетка для новостей или блога с фоном", "FD302"],
    920: ["Две колонки с символами на фоне", "FR407"],
    921: ["Текст и комбинация изображений", "AB903"],
    922: ["Карточка продукта с фоновым изображением", "ST215"],
    923: ["Слайдер с карточками", "TE800"],
    924: ["Поток: Сетка для новостей или блога", "FD201"],
    937: ["Плейлист для видеокурса", "VD14"],
    938: ["Фоновое изображение и карточки", "FR305"],
    939: ["Преимущества в виде галереи", "FR601"],
    940: ["Плитки с изображением или карточкой", "FR602"],
    941: ["Обложка со скошенной картинкой", "CR43"],
    942: ["Отзывы на обложке", "TS208"],
};

function addEditUi(rid, tplid) {
    let recid = `#rec${rid}`;
    let el = $(`${recid}`);
    let href = document.location.origin + document.location.pathname;
    let copy = `var t = $('<input>'); $('body').append(t); t.val('${href}#rec${rid}').select(); document.execCommand('copy'); t.remove()`;
    let data = `<div class="recordediticons mainleft" id="mainleft">`;
    data += `<div class="tp-record-edit-icons-left__wrapper">`;

    if (typeof $tpls[tplid] !== "undefined") {
        data += `	<div class="tp-record-edit-icons-left__one">`;
        if (typeof $tpls[tplid][2] !== "undefined") {
            data += `  <a href="${$tpls[tplid][2]}" target="_blank">`;
        }
        data += `		<div class="tp-record-edit-icons-left__item">`;
        data += `	    	<div class="tp-record-edit-icons-left__item-title">`;
        if (typeof $tpls[tplid][1] !== "undefined") {
            data += `	      		<div class="tp-record-edit-icons-left__item-tplcod">${$tpls[tplid][1]}</div>`;
        }
        data += `	    	</div>`;
        data += `		</div>`;
        if (typeof $tpls[tplid][2] !== "undefined") {
            data += `  </a>`;
        }
        data += `	</div>`;
        data += `	<div class="tp-record-edit-icons-left__one-right-space"></div>`;
        data += `   <div class="tp-record-edit-icons-left__one" onclick="${copy}" style="cursor: pointer" title="Копировать ссылку с якорем на этот блок">`;
        data += `       <div class="tp-record-edit-icons-left__item-title">`;
        data += `           <span class="tp-record-edit-icons-left__item-tplcod">#rec${rid}</span>`;
        data += `       </div>`;
        data += `   </div>`;
        data += `	<div class="tp-record-edit-icons-left__one-right-space"></div>`;
        data += `   <div class="tp-record-edit-icons-left__one" onclick="javascript:$('${recid}').remove()" style="cursor: pointer">`;
        data += `       <div class="tp-record-edit-icons-left__item-title">`;
        data += `           <span class="tp-record-edit-icons-left__item-tplcod">Удалить</span>`;
        data += `       </div>`;
        data += `   </div>`;
    }
    data += ` </div>`;
    data += `</div>`;

    if (typeof $tpls[tplid] !== "undefined") {
        data += `<div class="recordediticons secondleft tp-record-edit-icons-left__item-tpltitle">${$tpls[tplid][0]}</div>`;
    }

    el.prepend(data);
}

$(document).ready(function () {
    $("[data-record-type]").each(function () {
        let id = $(this).attr("id");
        let tplid = $(this).attr("data-record-type");
        addEditUi(id.substr(3), tplid);
    });

    $("body").append(`
<style>
.t-rec:hover .recordediticons {
    display: block
}

.tp-record-edit-icons-left__one[onclick]:hover {
    background: #ddd
}

.recordediticons {
    z-index: 889;
    display: none;
    position: absolute
}

.recordediticons.mainleft,.recordediticons.secondleft {
    float: left;
    left: 15px;
    background-color: transparent
}

.tp-record-edit-icons-left__wrapper {
    display: table;
    height: 28px;
    white-space: nowrap;
    -webkit-font-smoothing: antialiased
}

.tp-record-edit-icons-left__one {
    display: table-cell;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
    border-radius: 3px;
    color: #111
}

.tp-record-edit-icons-left__item-tplcod {
    display: table-cell;
    height: 28px;
    vertical-align: middle;
    padding-top: 2px;
    padding-left: 12px;
    font-size: 13px;
    line-height: 13px
}

.tp-record-edit-icons-left__item {
    display: table;
    height: 28px;
    white-space: nowrap;
    vertical-align: middle
}

.tp-record-edit-icons-left__item-title {
    display: table-cell;
    height: 28px;
    vertical-align: middle;
    padding-top: 2px;
    padding-right: 12px;
    font-size: 15px;
    line-height: 15px
}

.recordediticons.secondleft {
    left: 16px;
    margin-top: 45px;
    color: #777;
    max-width: 100px;
    font-size: 10px;
    line-height: 10px
}

.tp-record-edit-icons-left__one-right-space {
    display: table-cell;
    width: 5px
}

.t-rec:hover {
    outline: dashed 1px #0ff;
    outline-offset: -1px
}

.body {
    user-select: unset !important;
}
</style>

<script>
    document.oncontextmenu = null;
    var t875_removeSelection = function () {};
    document.removeEventListener("mousemove", function () {});
    document.removeEventListener("mousedown", function () {});
    $("body").css("user-select", "unset");
    let whiteList = ["player.vimeo.com", "youtube.com"];
    document.querySelectorAll("iframe").forEach(function (el) {
        if (!whiteList.some(site => el.src.includes(site))) {
            el.style.outline = "dashed 5px #0ff";
            el.style.outlineOffset = "-7px";
            el.style.border = "#0ff dashed 1px";
        }
    });
</script>
    `);
});