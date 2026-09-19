/* =========================================================
   YK Tiler Pro — interactions + i18n
   ========================================================= */
(function () {
  "use strict";

  /* ---------------- Constants ---------------- */
  var WA_NUMBER = "420774862712";
  var PHONE = "+420 774 862 712";

  /* ---------------- Translations ---------------- */
  var I18N = {
    cz: {
      "brand.tag": "Obklady & dlažby",

      "nav.home": "Domů",
      "nav.services": "Služby",
      "nav.portfolio": "Reference",
      "nav.contact": "Kontakt",
      "nav.cta": "Nezávazná poptávka",

      "hero.eyebrow": "Obklady · Dlažby · Mramor",
      "hero.title": "Precizní obklady a dlažby, které <span class='gold'>vydrží roky</span>",
      "hero.lead": "Kompletní realizace koupelen, velkoformátových dlažeb a luxusního mramoru. Čistá práce, přesné spáry a smysl pro detail — od návrhu až po předání.",
      "hero.cta1": "Napsat na WhatsApp",
      "hero.cta2": "Prohlédnout reference",
      "hero.m1s": "A–Z", "hero.m1l": "kompletní realizace",
      "hero.m2s": "PRO", "hero.m2l": "profi materiály a nářadí",
      "hero.m3s": "CZ", "hero.m3l": "Praha a okolí",
      "hero.scroll": "Scroll",

      "feat.f1t": "Ruční preciznost", "feat.f1d": "Rovné plochy, dokonalé spáry a přesné řezy do posledního milimetru.",
      "feat.f2t": "Prémiové materiály", "feat.f2d": "Pracuji s kvalitními lepidly, hydroizolací a spárovacími hmotami.",
      "feat.f3t": "Termíny a čistota", "feat.f3d": "Dodržené termíny a uklizené staveniště po celou dobu realizace.",
      "feat.f4t": "Záruka kvality", "feat.f4d": "Za odvedenou práci ručím. Řešení na míru vašemu prostoru.",

      "about.eyebrow": "O mistrovi",
      "about.title": "Řemeslo, které mluví za sebe",
      "about.p1": "Jmenuji se Emil Kukulnyk a obkladům a dlažbám se věnuji naplno. Každý projekt beru jako vizitku — proto dbám na rovinu, přesné spárořezy a čistý detail.",
      "about.p2": "Od malých koupelen po velkoformátový mramor, schody a terasy. Poradím s materiálem, layoutem plochy i technickým řešením, aby výsledek vydržel a skvěle vypadal.",
      "about.li1": "Koupelny na klíč včetně hydroizolace",
      "about.li2": "Velkoformátové obklady a slinutá dlažba",
      "about.li3": "Mramor, Portoro a dekorativní plochy",
      "about.li4": "Osobní přístup a poradenství zdarma",
      "about.sigrole": "Mistr obkladač",

      "srv.eyebrow": "Co nabízím",
      "srv.title": "Služby na míru vašemu prostoru",
      "srv.lead": "Komplexní obkladačské práce v nejvyšší kvalitě — pro rodinné domy, byty i komerční prostory.",
      "srv.s1t": "Koupelny na klíč", "srv.s1d": "Kompletní realizace koupelen včetně hydroizolace, obkladů, dlažby a osazení sanity.",
      "srv.s2t": "Velkoformátová dlažba", "srv.s2d": "Pokládka velkoformátů a slinuté dlažby s minimálními spárami a dokonalou rovinou.",
      "srv.s3t": "Mramor & Portoro", "srv.s3d": "Luxusní mramorové plochy, stěny a dekory se sladěnou kresbou a leštěným detailem.",
      "srv.s4t": "Podlahy & dlažby", "srv.s4d": "Dlažby interiérů, dřevodekory a mozaiky — přesné vzory a čistý výsledek.",
      "srv.s5t": "Schody & terasy", "srv.s5d": "Obklad venkovních schodů, teras a soklů s důrazem na mrazuvzdornost a spád.",
      "srv.s6t": "Krby & dekory", "srv.s6d": "Obklady krbů, dekorativní stěny a atypická řešení podle vašeho návrhu.",

      "proc.eyebrow": "Jak to probíhá",
      "proc.title": "Jednoduchý postup, jasný výsledek",
      "proc.lead": "Od prvního kontaktu až po předání hotového díla — vše přehledně a bez stresu.",
      "proc.st1t": "Konzultace", "proc.st1d": "Probereme rozsah, materiály a vaše představy — osobně nebo přes WhatsApp.",
      "proc.st2t": "Návrh & kalkulace", "proc.st2d": "Navrhnu řešení, layout plochy a připravím transparentní cenovou nabídku.",
      "proc.st3t": "Realizace", "proc.st3d": "Přesná pokládka, čisté spáry a průběžný úklid staveniště.",
      "proc.st4t": "Předání", "proc.st4d": "Společná kontrola detailů a předání hotové, čisté práce.",

      "port.eyebrow": "Reference",
      "port.title": "Vybrané realizace",
      "port.lead": "Ukázka dokončených i probíhajících projektů. Klikněte pro zvětšení.",
      "port.more": "Zobrazit všechny reference",

      "filt.all": "Vše",
      "filt.bath": "Koupelny",
      "filt.marble": "Mramor",
      "filt.floor": "Podlahy",
      "filt.outdoor": "Exteriér",
      "filt.feature": "Krby & dekory",

      "cat.bath": "Koupelna",
      "cat.marble": "Mramor",
      "cat.floor": "Podlaha",
      "cat.outdoor": "Exteriér",
      "cat.feature": "Dekor",

      "g.hero": "Tmavý mramor",
      "g01": "Portoro — mramorová stěna",
      "g02": "Portoro — sprchový kout",
      "g03": "Portoro — obklad pod umyvadlo",
      "g04": "Portoro & bílý mramor",
      "g05": "Koupelna s volně stojící vanou",
      "g06": "Calacatta koupelna",
      "g07": "Tmavý mramor — sprcha",
      "g08": "Antracitový mramor",
      "g09": "Mramorová vana",
      "g10": "Krb & rybí kost",
      "g11": "Dřevodekor & metro",
      "g12": "Kamenné schody",
      "g13": "Venkovní terasa",
      "g14": "Dřevodekorová podlaha",
      "g15": "Travertin — vzor",
      "g16": "Zelený mramor",
      "g17": "Podkrovní koupelna",
      "g18": "Béžový mramor",
      "g19": "Tmavá dlažba — chodba",
      "g20": "Šedá koupelna",
      "g21": "Velkoformát — světlý",
      "g22": "Šedý mramor s vanou",
      "g23": "Podkrovní sprcha",

      "rev.eyebrow": "Reference klientů",
      "rev.title": "Co říkají zákazníci",
      "rev.r1t": "Koupelnu s Portoro mramorem odvedl naprosto perfektně. Spáry jako podle pravítka, čisto a v termínu.",
      "rev.r1n": "Petr H.", "rev.r1l": "Rodinný dům",
      "rev.r2t": "Velkoformátová dlažba v obýváku vypadá luxusně. Profesionální přístup a skvělá komunikace.",
      "rev.r2n": "Jana K.", "rev.r2l": "Byt, rekonstrukce",
      "rev.r3t": "Venkovní schody a terasa drží perfektně. Doporučuji každému, kdo chce kvalitu.",
      "rev.r3n": "Martin D.", "rev.r3l": "Rodinný dům",

      "cta.eyebrow": "Máte projekt?",
      "cta.title": "Pojďme proměnit váš prostor",
      "cta.text": "Napište mi popis projektu a fotky prostoru — ozvu se s návrhem řešení a orientační cenou.",
      "cta.btn1": "Napsat na WhatsApp",
      "cta.btn2": "Zavolat " + PHONE,

      "con.eyebrow": "Kontakt",
      "con.title": "Ozvěte se — rád poradím",
      "con.lead": "Nejrychleji mě zastihnete na telefonu nebo WhatsApp. Můžete rovnou poslat fotky prostoru.",
      "con.phonel": "Telefon",
      "con.wal": "WhatsApp",
      "con.igl": "Instagram",
      "con.areal": "Působnost",
      "con.areav": "Praha a okolí, ČR",
      "con.follow": "Sledujte moji práci",

      "f.name": "Jméno",
      "f.namep": "Vaše jméno",
      "f.phone": "Telefon",
      "f.phonep": "+420 ...",
      "f.service": "Typ zakázky",
      "f.opt0": "Vyberte službu",
      "f.opt1": "Koupelna na klíč",
      "f.opt2": "Velkoformátová dlažba",
      "f.opt3": "Mramor & Portoro",
      "f.opt4": "Podlahy & dlažby",
      "f.opt5": "Schody & terasy",
      "f.opt6": "Jiné",
      "f.msg": "Zpráva",
      "f.msgp": "Popište prosím rozsah prací, rozměry a termín...",
      "f.submit": "Odeslat přes WhatsApp",
      "f.note": "Odesláním se otevře WhatsApp s předvyplněnou zprávou.",
      "f.maph": "Kde působím",

      "foot.about": "Precizní obkladačské práce — koupelny na klíč, velkoformátová dlažba a luxusní mramor. Kvalita, na kterou se můžete spolehnout.",
      "foot.nav": "Navigace",
      "foot.services": "Služby",
      "foot.contact": "Kontakt",
      "foot.rights": "Všechna práva vyhrazena.",

      "ph.srv.title": "Naše služby",
      "ph.srv.sub": "Komplexní obkladačské práce v nejvyšší kvalitě pro váš domov i firmu.",
      "ph.port.title": "Reference",
      "ph.port.sub": "Vybrané realizace koupelen, mramoru, podlah a exteriérů.",
      "ph.con.title": "Kontakt",
      "ph.con.sub": "Napište nebo zavolejte — rád proberu váš projekt a poradím s řešením."
    },

    ru: {
      "brand.tag": "Плитка и укладка",

      "nav.home": "Главная",
      "nav.services": "Услуги",
      "nav.portfolio": "Работы",
      "nav.contact": "Контакты",
      "nav.cta": "Оставить заявку",

      "hero.eyebrow": "Плитка · Укладка · Мрамор",
      "hero.title": "Точная укладка плитки, которая <span class='gold'>служит годами</span>",
      "hero.lead": "Ванные под ключ, крупноформатная плитка и премиальный мрамор. Чистая работа, идеальные швы и внимание к деталям — от замера до сдачи.",
      "hero.cta1": "Написать в WhatsApp",
      "hero.cta2": "Смотреть работы",
      "hero.m1s": "A–Z", "hero.m1l": "работа под ключ",
      "hero.m2s": "PRO", "hero.m2l": "профи материалы и инструмент",
      "hero.m3s": "CZ", "hero.m3l": "Прага и окрестности",
      "hero.scroll": "Вниз",

      "feat.f1t": "Ручная точность", "feat.f1d": "Ровные плоскости, идеальные швы и точная подрезка до миллиметра.",
      "feat.f2t": "Премиальные материалы", "feat.f2d": "Работаю с качественными клеями, гидроизоляцией и затирками.",
      "feat.f3t": "Сроки и чистота", "feat.f3d": "Соблюдаю сроки и держу площадку в порядке на всех этапах.",
      "feat.f4t": "Гарантия качества", "feat.f4d": "Отвечаю за результат. Решения под ваше пространство.",

      "about.eyebrow": "О мастере",
      "about.title": "Ремесло, говорящее само за себя",
      "about.p1": "Меня зовут Emil Kukulnyk, и укладка плитки — моё дело. Каждый проект для меня — визитная карточка, поэтому слежу за плоскостью, раскладкой швов и чистотой детали.",
      "about.p2": "От небольших ванных до крупноформатного мрамора, лестниц и террас. Подскажу с материалом, раскладкой и техническим решением, чтобы результат был долговечным и красивым.",
      "about.li1": "Ванные под ключ с гидроизоляцией",
      "about.li2": "Крупноформатная плитка и керамогранит",
      "about.li3": "Мрамор, Portoro и декоративные поверхности",
      "about.li4": "Личный подход и бесплатная консультация",
      "about.sigrole": "Мастер-плиточник",

      "srv.eyebrow": "Что я предлагаю",
      "srv.title": "Услуги под ваше пространство",
      "srv.lead": "Комплексные плиточные работы высшего качества — для домов, квартир и коммерческих помещений.",
      "srv.s1t": "Ванные под ключ", "srv.s1d": "Полная отделка ванных: гидроизоляция, плитка, укладка и установка сантехники.",
      "srv.s2t": "Крупноформатная плитка", "srv.s2d": "Укладка крупных форматов и керамогранита с минимальными швами и идеальной плоскостью.",
      "srv.s3t": "Мрамор и Portoro", "srv.s3d": "Роскошные мраморные поверхности, стены и декоры с подбором рисунка и полировкой.",
      "srv.s4t": "Полы и укладка", "srv.s4d": "Плитка в интерьере, дерево-декоры и мозаика — точные узоры и чистый результат.",
      "srv.s5t": "Лестницы и террасы", "srv.s5d": "Облицовка наружных лестниц, террас и цоколей с учётом морозостойкости и уклона.",
      "srv.s6t": "Камины и декор", "srv.s6d": "Облицовка каминов, декоративные стены и нестандартные решения по вашему проекту.",

      "proc.eyebrow": "Как проходит работа",
      "proc.title": "Простой процесс, понятный результат",
      "proc.lead": "От первого контакта до сдачи готовой работы — прозрачно и без стресса.",
      "proc.st1t": "Консультация", "proc.st1d": "Обсудим объём, материалы и ваши пожелания — лично или в WhatsApp.",
      "proc.st2t": "Проект и смета", "proc.st2d": "Предложу решение, раскладку и подготовлю прозрачную смету.",
      "proc.st3t": "Укладка", "proc.st3d": "Точная укладка, чистые швы и постоянная уборка площадки.",
      "proc.st4t": "Сдача", "proc.st4d": "Совместная проверка деталей и передача готовой, чистой работы.",

      "port.eyebrow": "Работы",
      "port.title": "Избранные проекты",
      "port.lead": "Примеры завершённых и текущих проектов. Нажмите для увеличения.",
      "port.more": "Смотреть все работы",

      "filt.all": "Все",
      "filt.bath": "Ванные",
      "filt.marble": "Мрамор",
      "filt.floor": "Полы",
      "filt.outdoor": "Экстерьер",
      "filt.feature": "Камины и декор",

      "cat.bath": "Ванная",
      "cat.marble": "Мрамор",
      "cat.floor": "Пол",
      "cat.outdoor": "Экстерьер",
      "cat.feature": "Декор",

      "g.hero": "Тёмный мрамор",
      "g01": "Portoro — мраморная стена",
      "g02": "Portoro — душевая",
      "g03": "Portoro — под умывальник",
      "g04": "Portoro и белый мрамор",
      "g05": "Ванная с отдельной ванной",
      "g06": "Ванная Calacatta",
      "g07": "Тёмный мрамор — душ",
      "g08": "Антрацитовый мрамор",
      "g09": "Мраморная ванна",
      "g10": "Камин и ёлочка",
      "g11": "Дерево-декор и метро",
      "g12": "Каменные ступени",
      "g13": "Наружная терраса",
      "g14": "Пол под дерево",
      "g15": "Травертин — узор",
      "g16": "Зелёный мрамор",
      "g17": "Мансардная ванная",
      "g18": "Бежевый мрамор",
      "g19": "Тёмная плитка — коридор",
      "g20": "Серая ванная",
      "g21": "Крупный формат — светлый",
      "g22": "Серый мрамор с ванной",
      "g23": "Мансардная душевая",

      "rev.eyebrow": "Отзывы клиентов",
      "rev.title": "Что говорят заказчики",
      "rev.r1t": "Ванную с мрамором Portoro сделал безупречно. Швы как по линейке, чисто и в срок.",
      "rev.r1n": "Пётр Х.", "rev.r1l": "Частный дом",
      "rev.r2t": "Крупноформатная плитка в гостиной выглядит роскошно. Профессиональный подход и отличная связь.",
      "rev.r2n": "Яна К.", "rev.r2l": "Квартира, ремонт",
      "rev.r3t": "Наружные ступени и терраса держатся отлично. Рекомендую всем, кто хочет качество.",
      "rev.r3n": "Мартин Д.", "rev.r3l": "Частный дом",

      "cta.eyebrow": "Есть проект?",
      "cta.title": "Давайте преобразим ваше пространство",
      "cta.text": "Опишите проект и пришлите фото помещения — отвечу с решением и ориентировочной ценой.",
      "cta.btn1": "Написать в WhatsApp",
      "cta.btn2": "Позвонить " + PHONE,

      "con.eyebrow": "Контакты",
      "con.title": "Свяжитесь — с радостью помогу",
      "con.lead": "Быстрее всего — по телефону или в WhatsApp. Можно сразу прислать фото помещения.",
      "con.phonel": "Телефон",
      "con.wal": "WhatsApp",
      "con.igl": "Instagram",
      "con.areal": "География",
      "con.areav": "Прага и окрестности, ЧР",
      "con.follow": "Следите за моей работой",

      "f.name": "Имя",
      "f.namep": "Ваше имя",
      "f.phone": "Телефон",
      "f.phonep": "+420 ...",
      "f.service": "Тип работ",
      "f.opt0": "Выберите услугу",
      "f.opt1": "Ванная под ключ",
      "f.opt2": "Крупноформатная плитка",
      "f.opt3": "Мрамор и Portoro",
      "f.opt4": "Полы и укладка",
      "f.opt5": "Лестницы и террасы",
      "f.opt6": "Другое",
      "f.msg": "Сообщение",
      "f.msgp": "Опишите объём работ, размеры и сроки...",
      "f.submit": "Отправить в WhatsApp",
      "f.note": "После отправки откроется WhatsApp с готовым сообщением.",
      "f.maph": "Где я работаю",

      "foot.about": "Точные плиточные работы — ванные под ключ, крупноформатная плитка и премиальный мрамор. Качество, на которое можно положиться.",
      "foot.nav": "Навигация",
      "foot.services": "Услуги",
      "foot.contact": "Контакты",
      "foot.rights": "Все права защищены.",

      "ph.srv.title": "Наши услуги",
      "ph.srv.sub": "Комплексные плиточные работы высшего качества для дома и бизнеса.",
      "ph.port.title": "Работы",
      "ph.port.sub": "Избранные проекты: ванные, мрамор, полы и экстерьер.",
      "ph.con.title": "Контакты",
      "ph.con.sub": "Напишите или позвоните — обсудим проект и подскажу решение."
    },

    en: {
      "brand.tag": "Tiling & stonework",

      "nav.home": "Home",
      "nav.services": "Services",
      "nav.portfolio": "Work",
      "nav.contact": "Contact",
      "nav.cta": "Get a quote",

      "hero.eyebrow": "Tiling · Flooring · Marble",
      "hero.title": "Precision tiling that <span class='gold'>lasts for years</span>",
      "hero.lead": "Complete bathrooms, large-format tiling and premium marble. Clean work, perfect grout lines and true attention to detail — from design to handover.",
      "hero.cta1": "Message on WhatsApp",
      "hero.cta2": "View our work",
      "hero.m1s": "A–Z", "hero.m1l": "full turnkey work",
      "hero.m2s": "PRO", "hero.m2l": "pro materials & tools",
      "hero.m3s": "CZ", "hero.m3l": "Prague & surroundings",
      "hero.scroll": "Scroll",

      "feat.f1t": "Hand precision", "feat.f1d": "Flat surfaces, perfect grout lines and exact cuts down to the millimetre.",
      "feat.f2t": "Premium materials", "feat.f2d": "I work with quality adhesives, waterproofing and grouts.",
      "feat.f3t": "On time & clean", "feat.f3d": "Deadlines met and the site kept tidy throughout the job.",
      "feat.f4t": "Quality guarantee", "feat.f4d": "I stand behind my work. Solutions tailored to your space.",

      "about.eyebrow": "About the craftsman",
      "about.title": "Craft that speaks for itself",
      "about.p1": "My name is Emil Kukulnyk and tiling is what I do best. I treat every project as my calling card — obsessing over level surfaces, grout layout and clean detailing.",
      "about.p2": "From small bathrooms to large-format marble, stairs and terraces. I'll advise on materials, layout and technical solutions so the result lasts and looks stunning.",
      "about.li1": "Turnkey bathrooms incl. waterproofing",
      "about.li2": "Large-format tiles and porcelain",
      "about.li3": "Marble, Portoro and decorative surfaces",
      "about.li4": "Personal approach & free consultation",
      "about.sigrole": "Master tiler",

      "srv.eyebrow": "What I offer",
      "srv.title": "Services tailored to your space",
      "srv.lead": "Complete tiling work at the highest quality — for houses, apartments and commercial spaces.",
      "srv.s1t": "Turnkey bathrooms", "srv.s1d": "Complete bathroom builds incl. waterproofing, wall & floor tiling and sanitary fit-out.",
      "srv.s2t": "Large-format tiling", "srv.s2d": "Large-format and porcelain slabs with minimal joints and a perfectly flat finish.",
      "srv.s3t": "Marble & Portoro", "srv.s3d": "Luxury marble surfaces, walls and features with matched veining and polished detail.",
      "srv.s4t": "Floors & tiling", "srv.s4d": "Interior floor tiling, wood-look tiles and mosaics — precise patterns, clean results.",
      "srv.s5t": "Stairs & terraces", "srv.s5d": "Cladding of outdoor stairs, terraces and plinths with frost resistance and drainage in mind.",
      "srv.s6t": "Fireplaces & features", "srv.s6d": "Fireplace cladding, feature walls and bespoke solutions to your design.",

      "proc.eyebrow": "How it works",
      "proc.title": "A simple process, a clear result",
      "proc.lead": "From first contact to handover of the finished work — transparent and stress-free.",
      "proc.st1t": "Consultation", "proc.st1d": "We discuss scope, materials and your ideas — in person or over WhatsApp.",
      "proc.st2t": "Design & quote", "proc.st2d": "I propose a solution, the layout and prepare a transparent quote.",
      "proc.st3t": "Execution", "proc.st3d": "Precise laying, clean grout lines and continuous site cleaning.",
      "proc.st4t": "Handover", "proc.st4d": "A joint check of the details and handover of clean, finished work.",

      "port.eyebrow": "Our work",
      "port.title": "Selected projects",
      "port.lead": "A sample of completed and ongoing projects. Click to enlarge.",
      "port.more": "View all our work",

      "filt.all": "All",
      "filt.bath": "Bathrooms",
      "filt.marble": "Marble",
      "filt.floor": "Floors",
      "filt.outdoor": "Exterior",
      "filt.feature": "Fireplaces & decor",

      "cat.bath": "Bathroom",
      "cat.marble": "Marble",
      "cat.floor": "Floor",
      "cat.outdoor": "Exterior",
      "cat.feature": "Feature",

      "g.hero": "Dark marble",
      "g01": "Portoro — marble wall",
      "g02": "Portoro — shower",
      "g03": "Portoro — vanity wall",
      "g04": "Portoro & white marble",
      "g05": "Bathroom with freestanding tub",
      "g06": "Calacatta bathroom",
      "g07": "Dark marble — shower",
      "g08": "Anthracite marble",
      "g09": "Marble bathtub",
      "g10": "Fireplace & herringbone",
      "g11": "Wood-look & metro",
      "g12": "Stone stairs",
      "g13": "Outdoor terrace",
      "g14": "Wood-look floor",
      "g15": "Travertine — pattern",
      "g16": "Green marble",
      "g17": "Attic bathroom",
      "g18": "Beige marble",
      "g19": "Dark floor — hallway",
      "g20": "Grey bathroom",
      "g21": "Large format — light",
      "g22": "Grey marble with tub",
      "g23": "Attic shower",

      "rev.eyebrow": "Client reviews",
      "rev.title": "What clients say",
      "rev.r1t": "He did the Portoro marble bathroom flawlessly. Grout lines like a ruler, clean and on time.",
      "rev.r1n": "Petr H.", "rev.r1l": "Family house",
      "rev.r2t": "The large-format floor in our living room looks luxurious. Professional and great communication.",
      "rev.r2n": "Jana K.", "rev.r2l": "Apartment renovation",
      "rev.r3t": "The outdoor stairs and terrace hold up perfectly. I recommend him to anyone wanting quality.",
      "rev.r3n": "Martin D.", "rev.r3l": "Family house",

      "cta.eyebrow": "Have a project?",
      "cta.title": "Let's transform your space",
      "cta.text": "Send me a description of the project and photos of the space — I'll reply with a solution and a ballpark price.",
      "cta.btn1": "Message on WhatsApp",
      "cta.btn2": "Call " + PHONE,

      "con.eyebrow": "Contact",
      "con.title": "Get in touch — happy to help",
      "con.lead": "The fastest way to reach me is by phone or WhatsApp. Feel free to send photos of the space.",
      "con.phonel": "Phone",
      "con.wal": "WhatsApp",
      "con.igl": "Instagram",
      "con.areal": "Area",
      "con.areav": "Prague & surroundings, CZ",
      "con.follow": "Follow my work",

      "f.name": "Name",
      "f.namep": "Your name",
      "f.phone": "Phone",
      "f.phonep": "+420 ...",
      "f.service": "Type of work",
      "f.opt0": "Select a service",
      "f.opt1": "Turnkey bathroom",
      "f.opt2": "Large-format tiling",
      "f.opt3": "Marble & Portoro",
      "f.opt4": "Floors & tiling",
      "f.opt5": "Stairs & terraces",
      "f.opt6": "Other",
      "f.msg": "Message",
      "f.msgp": "Please describe the scope, dimensions and timeline...",
      "f.submit": "Send via WhatsApp",
      "f.note": "Submitting opens WhatsApp with a pre-filled message.",
      "f.maph": "Where I work",

      "foot.about": "Precision tiling — turnkey bathrooms, large-format tiling and premium marble. Quality you can rely on.",
      "foot.nav": "Navigation",
      "foot.services": "Services",
      "foot.contact": "Contact",
      "foot.rights": "All rights reserved.",

      "ph.srv.title": "Our services",
      "ph.srv.sub": "Complete tiling work at the highest quality for your home or business.",
      "ph.port.title": "Our work",
      "ph.port.sub": "Selected projects: bathrooms, marble, floors and exteriors.",
      "ph.con.title": "Contact",
      "ph.con.sub": "Write or call — let's discuss your project and find the right solution."
    }
  };

  var SUPPORTED = ["cz", "ru", "en"];

  /* ---------------- i18n apply ---------------- */
  function getLang() {
    var stored = localStorage.getItem("yk_lang");
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || "en").slice(0, 2).toLowerCase();
    if (nav === "cs" || nav === "sk") return "cz";
    if (nav === "ru" || nav === "uk") return "ru";
    return "en";
  }

  function applyLang(lang) {
    var dict = I18N[lang] || I18N.en;
    document.documentElement.setAttribute("lang", lang === "cz" ? "cs" : lang);

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-ph]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-ph");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll(".lang button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });

    localStorage.setItem("yk_lang", lang);
    window.__lang = lang;
  }

  /* ---------------- DOM ready ---------------- */
  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());

    /* Language switch */
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.addEventListener("click", function () {
        applyLang(b.getAttribute("data-lang"));
      });
    });

    /* Header scroll state */
    var header = document.querySelector(".header");
    function onScroll() {
      if (header) header.classList.toggle("scrolled", window.scrollY > 20);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Mobile menu */
    var burger = document.querySelector(".burger");
    var links = document.querySelector(".nav__links");
    if (burger && links) {
      burger.addEventListener("click", function () {
        burger.classList.toggle("open");
        links.classList.toggle("open");
      });
      links.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", function () {
          burger.classList.remove("open");
          links.classList.remove("open");
        });
      });
    }

    /* Reveal on scroll */
    var reveals = document.querySelectorAll(".reveal");
    if ("IntersectionObserver" in window && reveals.length) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.12, rootMargin: "0px 0px -60px 0px" });
      reveals.forEach(function (el) { io.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add("in"); });
    }

    /* Portfolio filters */
    var filters = document.querySelectorAll(".filter");
    var items = document.querySelectorAll(".gallery__item");
    if (filters.length) {
      filters.forEach(function (f) {
        f.addEventListener("click", function () {
          filters.forEach(function (x) { x.classList.remove("active"); });
          f.classList.add("active");
          var cat = f.getAttribute("data-filter");
          items.forEach(function (it) {
            var show = cat === "all" || it.getAttribute("data-cat") === cat;
            it.classList.toggle("is-hidden", !show);
          });
        });
      });
    }

    /* Lightbox */
    var lb = document.getElementById("lightbox");
    if (lb && items.length) {
      var lbImg = lb.querySelector("img");
      var visibleList = [];
      var idx = 0;

      function buildList() {
        visibleList = Array.prototype.filter.call(items, function (it) {
          return !it.classList.contains("is-hidden");
        });
      }
      function open(target) {
        buildList();
        idx = visibleList.indexOf(target);
        show();
        lb.classList.add("open");
        document.body.style.overflow = "hidden";
      }
      function show() {
        var it = visibleList[idx];
        if (!it) return;
        var full = it.getAttribute("data-full") || it.querySelector("img").src;
        lbImg.src = full;
      }
      function close() {
        lb.classList.remove("open");
        document.body.style.overflow = "";
      }
      function nav(dir) {
        idx = (idx + dir + visibleList.length) % visibleList.length;
        show();
      }

      items.forEach(function (it) {
        it.addEventListener("click", function () { open(it); });
      });
      lb.querySelector(".lightbox__close").addEventListener("click", close);
      lb.querySelector(".lightbox__nav--prev").addEventListener("click", function () { nav(-1); });
      lb.querySelector(".lightbox__nav--next").addEventListener("click", function () { nav(1); });
      lb.addEventListener("click", function (e) { if (e.target === lb) close(); });
      document.addEventListener("keydown", function (e) {
        if (!lb.classList.contains("open")) return;
        if (e.key === "Escape") close();
        if (e.key === "ArrowLeft") nav(-1);
        if (e.key === "ArrowRight") nav(1);
      });
    }

    /* Contact form -> WhatsApp */
    var form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        var lang = window.__lang || "cz";
        var name = (form.querySelector("[name=name]") || {}).value || "";
        var phone = (form.querySelector("[name=phone]") || {}).value || "";
        var service = (form.querySelector("[name=service]") || {});
        var serviceTxt = service.options ? service.options[service.selectedIndex].text : "";
        var msg = (form.querySelector("[name=message]") || {}).value || "";

        var labels = {
          cz: { h: "Nová poptávka z webu", n: "Jméno", p: "Telefon", s: "Služba", m: "Zpráva" },
          ru: { h: "Новая заявка с сайта", n: "Имя", p: "Телефон", s: "Услуга", m: "Сообщение" },
          en: { h: "New enquiry from website", n: "Name", p: "Phone", s: "Service", m: "Message" }
        }[lang];

        var text = "*" + labels.h + "*\n" +
          labels.n + ": " + name + "\n" +
          labels.p + ": " + phone + "\n" +
          labels.s + ": " + serviceTxt + "\n" +
          labels.m + ": " + msg;

        var url = "https://wa.me/" + WA_NUMBER + "?text=" + encodeURIComponent(text);
        window.open(url, "_blank");
      });
    }

    /* Footer year */
    var yr = document.getElementById("year");
    if (yr) yr.textContent = new Date().getFullYear();
  });
})();
