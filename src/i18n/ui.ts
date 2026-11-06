export const languages = { fr: 'Français', en: 'English', ar: 'العربية' } as const;
export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'fr';
export const rtlLangs: Lang[] = ['ar'];
export const isRtl = (lang: Lang) => rtlLangs.includes(lang);

/** URL prefix for a locale ('' for the default locale at the site root). */
export const localePath = (lang: Lang) => (lang === defaultLang ? '' : `/${lang}`);

export type Dict = (typeof ui)['en'];

export const ui = {
  en: {
    meta: {
      title: 'Fidlo — The loyalty card that lives on the phone',
      description:
        'Fidlo replaces paper stamp cards with a simple app. Customers scan to collect stamps or points and earn rewards; owners set it up from their phone. Works for any shop. FR · AR · EN.',
    },
    nav: { how: 'How it works', apps: 'The apps', features: 'Features', cta: 'Get the app' },
    hero: {
      eyebrow: 'Digital loyalty cards',
      titleMain: 'Keep your customers',
      titleAccent: 'coming back',
      lead: 'Fidlo is the loyalty stamp card — but on the phone. Customers scan after each purchase, collect stamps or points, and earn rewards.',
      plain: 'In plain words: like a "buy 9, get the 10th free" card, except nothing gets lost and you set it up from your phone.',
      ctaApp: 'Get the app',
      ctaHow: 'See how it works',
    },
    how: {
      tag: 'How it works',
      title: 'Three steps. That’s it.',
      sub: 'No hardware, no training. If you can take a photo, you can run a loyalty program.',
      s1t: 'Create your reward',
      s1d: 'Open the owner app and set up a program in a minute. Choose stamps or points, how many are needed, and what the customer gets.',
      s1e: '🎁 Example: Buy 9 coffees → the 10th is free',
      s2t: 'Customers scan & collect',
      s2d: 'Print one QR code and put it on your counter. After each purchase, the customer scans it and a stamp is added to their phone — no paper to lose.',
      s2e: '📈 Every visit brings them one step closer',
      s3t: 'They come back for the reward',
      s3d: 'When the card is full, the customer shows a reward code on their phone. You scan it to confirm — done. A free item, and a reason to return.',
      s3e: '✅ You scan once to redeem — no codes to type',
    },
    apps: {
      tag: 'One system, two apps',
      title: 'One for you, one for your customers',
      sub: 'Both are in the same free app — you just pick your role when you sign up.',
      ownerTitle: 'Owner app',
      ownerWho: 'You, the shop',
      ownerItems: [
        ['Build', 'stamp or points programs in minutes'],
        ['Show', 'a QR customers scan to collect'],
        ['Redeem', 'rewards by scanning the customer'],
        ['Track', 'scans, redemptions & conversion live'],
      ],
      custTitle: 'Customer app',
      custWho: 'Your customers',
      custItems: [
        ['Collect', 'stamps or points by scanning'],
        ['Track', 'progress toward the next reward'],
        ['Redeem', 'with a QR — nothing to carry'],
        ['Choose', 'French, Arabic or English'],
      ],
    },
    features: {
      tag: 'Why Fidlo',
      title: 'Simple for you, loved by customers',
      items: [
        ['📱', 'No paper, no hardware', 'Replaces punch cards. Just one printed QR on your counter — that’s all you need.'],
        ['🎟️', 'Stamps or points', '"Buy 9, get 1 free", or points that add up with spending. Your choice, per program.'],
        ['🛡️', 'No cheating', 'Turn on staff mode so only your team can add stamps — customers can’t fake visits.'],
        ['📊', 'See what works', 'A live dashboard shows scans, redemptions and how many customers come back.'],
        ['🌍', 'In their language', 'French, Arabic (right-to-left) and English — the app speaks your customers’ language.'],
        ['⚡', 'Set up in minutes', 'Create a program, print the QR, start rewarding. No training, no contracts.'],
      ],
    },
    types: {
      tag: 'Who it’s for',
      title: 'Any shop where people come back',
      list: [
        ['☕', 'Cafés'], ['🍽️', 'Restaurants'], ['🥐', 'Bakeries'], ['🛒', 'Grocery'],
        ['👕', 'Clothing'], ['💈', 'Barber & salon'], ['💄', 'Beauty'], ['💊', 'Pharmacy'],
        ['🏋️', 'Gym'], ['💐', 'Florist'], ['📱', 'Electronics'], ['＋', 'and more'],
      ],
    },
    cta: {
      title: 'Start rewarding your customers',
      desc: 'Fidlo runs on Android today. Get early access and set up your shop’s loyalty program in minutes — free to try.',
      button: 'Request early access',
    },
    footer: { privacy: 'Privacy', terms: 'Terms', contact: 'Contact', rights: 'All rights reserved' },
  },

  fr: {
    meta: {
      title: 'Fidlo — La carte de fidélité qui vit sur le téléphone',
      description:
        'Fidlo remplace les cartes à tampons en papier par une appli simple. Les clients scannent pour collecter des tampons ou des points et gagner des récompenses ; le commerçant configure tout depuis son téléphone. Pour tout commerce. FR · AR · EN.',
    },
    nav: { how: 'Comment ça marche', apps: 'Les applis', features: 'Fonctions', cta: 'Obtenir l’appli' },
    hero: {
      eyebrow: 'Cartes de fidélité numériques',
      titleMain: 'Faites',
      titleAccent: 'revenir vos clients',
      lead: 'Fidlo, c’est la carte de fidélité à tampons — mais sur le téléphone. Vos clients scannent après chaque achat, collectent des tampons ou des points et gagnent des récompenses.',
      plain: 'En clair : comme une carte « 9 achetés, le 10e offert », sauf que rien ne se perd et vous la configurez depuis votre téléphone.',
      ctaApp: 'Obtenir l’appli',
      ctaHow: 'Voir comment ça marche',
    },
    how: {
      tag: 'Comment ça marche',
      title: 'Trois étapes. C’est tout.',
      sub: 'Pas de matériel, pas de formation. Si vous savez prendre une photo, vous savez lancer un programme de fidélité.',
      s1t: 'Créez votre récompense',
      s1d: 'Ouvrez l’appli commerçant et créez un programme en une minute. Tampons ou points, le nombre requis, et ce que le client reçoit.',
      s1e: '🎁 Exemple : 9 cafés achetés → le 10e offert',
      s2t: 'Les clients scannent et collectent',
      s2d: 'Imprimez un seul code QR et posez-le sur votre comptoir. Après chaque achat, le client le scanne et un tampon s’ajoute sur son téléphone — plus rien à perdre.',
      s2e: '📈 Chaque visite les rapproche du but',
      s3t: 'Ils reviennent pour la récompense',
      s3d: 'Quand la carte est pleine, le client montre un code de récompense sur son téléphone. Vous le scannez pour confirmer — c’est fait. Un article offert, et une raison de revenir.',
      s3e: '✅ Un seul scan pour valider — aucun code à taper',
    },
    apps: {
      tag: 'Un système, deux applis',
      title: 'Une pour vous, une pour vos clients',
      sub: 'Les deux sont dans la même appli gratuite — vous choisissez votre rôle à l’inscription.',
      ownerTitle: 'Appli commerçant',
      ownerWho: 'Vous, le commerce',
      ownerItems: [
        ['Créez', 'des programmes à tampons ou points en minutes'],
        ['Affichez', 'un QR que les clients scannent'],
        ['Validez', 'les récompenses en scannant le client'],
        ['Suivez', 'scans, échanges et conversion en direct'],
      ],
      custTitle: 'Appli client',
      custWho: 'Vos clients',
      custItems: [
        ['Collectez', 'des tampons ou points en scannant'],
        ['Suivez', 'la progression vers la récompense'],
        ['Échangez', 'avec un QR — rien à transporter'],
        ['Choisissez', 'français, arabe ou anglais'],
      ],
    },
    features: {
      tag: 'Pourquoi Fidlo',
      title: 'Simple pour vous, adoré par vos clients',
      items: [
        ['📱', 'Ni papier, ni matériel', 'Remplace les cartes à tampons. Un seul QR imprimé sur le comptoir — c’est tout.'],
        ['🎟️', 'Tampons ou points', '« 9 achetés, 1 offert », ou des points qui montent avec les dépenses. À vous de choisir.'],
        ['🛡️', 'Pas de triche', 'Activez le mode personnel : seul votre staff ajoute les tampons — pas de fausses visites.'],
        ['📊', 'Voyez ce qui marche', 'Un tableau de bord en direct : scans, échanges et clients qui reviennent.'],
        ['🌍', 'Dans leur langue', 'Français, arabe (de droite à gauche) et anglais — l’appli parle la langue de vos clients.'],
        ['⚡', 'Prêt en minutes', 'Créez un programme, imprimez le QR, récompensez. Sans formation ni contrat.'],
      ],
    },
    types: {
      tag: 'Pour qui',
      title: 'Tout commerce où les gens reviennent',
      list: [
        ['☕', 'Cafés'], ['🍽️', 'Restaurants'], ['🥐', 'Boulangeries'], ['🛒', 'Épiceries'],
        ['👕', 'Vêtements'], ['💈', 'Coiffeur & salon'], ['💄', 'Beauté'], ['💊', 'Pharmacie'],
        ['🏋️', 'Salle de sport'], ['💐', 'Fleuriste'], ['📱', 'Électronique'], ['＋', 'et plus'],
      ],
    },
    cta: {
      title: 'Commencez à récompenser vos clients',
      desc: 'Fidlo fonctionne sur Android dès aujourd’hui. Obtenez un accès anticipé et configurez votre programme en quelques minutes — essai gratuit.',
      button: 'Demander un accès anticipé',
    },
    footer: { privacy: 'Confidentialité', terms: 'Conditions', contact: 'Contact', rights: 'Tous droits réservés' },
  },

  ar: {
    meta: {
      title: 'Fidlo — بطاقة الولاء التي تعيش في هاتفك',
      description:
        'يستبدل Fidlo بطاقات الطوابع الورقية بتطبيق بسيط. يمسح الزبائن ليجمعوا طوابع أو نقاطًا ويكسبوا مكافآت، ويُعدّ صاحب المتجر كل شيء من هاتفه. لأي متجر. FR · AR · EN.',
    },
    nav: { how: 'كيف يعمل', apps: 'التطبيقان', features: 'المميزات', cta: 'حمّل التطبيق' },
    hero: {
      eyebrow: 'بطاقات ولاء رقمية',
      titleMain: 'اجعل زبائنك',
      titleAccent: 'يعودون إليك',
      lead: 'Fidlo هي بطاقة الولاء بالطوابع — لكن على الهاتف. يمسح زبائنك بعد كل عملية شراء، يجمعون طوابع أو نقاطًا، ويكسبون مكافآت.',
      plain: 'ببساطة: مثل بطاقة «اشترِ 9 واحصل على العاشر مجانًا»، لكن لا شيء يُفقد وتُعدّها من هاتفك.',
      ctaApp: 'حمّل التطبيق',
      ctaHow: 'شاهد كيف يعمل',
    },
    how: {
      tag: 'كيف يعمل',
      title: 'ثلاث خطوات فقط.',
      sub: 'بلا أجهزة ولا تدريب. إن كنت تلتقط صورة، تستطيع تشغيل برنامج ولاء.',
      s1t: 'أنشئ مكافأتك',
      s1d: 'افتح تطبيق المتجر وأنشئ برنامجًا في دقيقة. اختر طوابع أو نقاطًا، والعدد المطلوب، وما يحصل عليه الزبون.',
      s1e: '🎁 مثال: اشترِ 9 قهوات ← العاشرة مجانًا',
      s2t: 'الزبائن يمسحون ويجمعون',
      s2d: 'اطبع رمز QR واحدًا وضعه على الطاولة. بعد كل شراء يمسحه الزبون فيُضاف طابع إلى هاتفه — لا ورق يضيع.',
      s2e: '📈 كل زيارة تقرّبهم خطوة',
      s3t: 'يعودون من أجل المكافأة',
      s3d: 'عند اكتمال البطاقة يعرض الزبون رمز المكافأة على هاتفه. تمسحه للتأكيد — تم. منتج مجاني وسبب للعودة.',
      s3e: '✅ مسحة واحدة للاستبدال — بلا كتابة رموز',
    },
    apps: {
      tag: 'نظام واحد، تطبيقان',
      title: 'واحد لك وواحد لزبائنك',
      sub: 'كلاهما في التطبيق المجاني نفسه — تختار دورك عند التسجيل.',
      ownerTitle: 'تطبيق المتجر',
      ownerWho: 'أنت، المتجر',
      ownerItems: [
        ['أنشئ', 'برامج طوابع أو نقاط في دقائق'],
        ['اعرض', 'رمز QR يمسحه الزبائن'],
        ['استبدل', 'المكافآت بمسح الزبون'],
        ['تابِع', 'المسح والاستبدال والتحويل مباشرة'],
      ],
      custTitle: 'تطبيق الزبون',
      custWho: 'زبائنك',
      custItems: [
        ['اجمع', 'طوابع أو نقاطًا بالمسح'],
        ['تابِع', 'تقدّمك نحو المكافأة'],
        ['استبدل', 'برمز QR — لا شيء تحمله'],
        ['اختر', 'الفرنسية أو العربية أو الإنجليزية'],
      ],
    },
    features: {
      tag: 'لماذا Fidlo',
      title: 'بسيط لك، محبوب لدى زبائنك',
      items: [
        ['📱', 'بلا ورق ولا أجهزة', 'يستبدل بطاقات الطوابع. رمز QR مطبوع واحد على الطاولة — هذا كل شيء.'],
        ['🎟️', 'طوابع أو نقاط', '«9 مقابل واحد مجانًا»، أو نقاط تتراكم مع الإنفاق. الخيار لك.'],
        ['🛡️', 'بلا غش', 'فعّل وضع الموظفين ليضيف فريقك وحده الطوابع — لا زيارات مزيفة.'],
        ['📊', 'اعرف ما ينجح', 'لوحة مباشرة: المسح والاستبدال وعدد العائدين.'],
        ['🌍', 'بلغتهم', 'الفرنسية والعربية (من اليمين لليسار) والإنجليزية.'],
        ['⚡', 'جاهز في دقائق', 'أنشئ برنامجًا، اطبع الرمز، ابدأ المكافأة. بلا تدريب أو عقود.'],
      ],
    },
    types: {
      tag: 'لمن',
      title: 'أي متجر يعود إليه الناس',
      list: [
        ['☕', 'مقاهٍ'], ['🍽️', 'مطاعم'], ['🥐', 'مخابز'], ['🛒', 'بقالة'],
        ['👕', 'ملابس'], ['💈', 'حلاق وصالون'], ['💄', 'تجميل'], ['💊', 'صيدلية'],
        ['🏋️', 'نادٍ رياضي'], ['💐', 'زهور'], ['📱', 'إلكترونيات'], ['＋', 'وغير ذلك'],
      ],
    },
    cta: {
      title: 'ابدأ بمكافأة زبائنك',
      desc: 'يعمل Fidlo على أندرويد اليوم. احصل على وصول مبكر وأعدّ برنامج الولاء في دقائق — تجربة مجانية.',
      button: 'اطلب وصولًا مبكرًا',
    },
    footer: { privacy: 'الخصوصية', terms: 'الشروط', contact: 'تواصل', rights: 'كل الحقوق محفوظة' },
  },
} as const;

export const useTranslations = (lang: Lang): Dict => ui[lang] as unknown as Dict;
