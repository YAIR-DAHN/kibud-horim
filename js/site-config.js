/**
 * תצורת אתר למחזור / נושא — נקודת עדכון אחת כשמשכפלים פרויקט.
 * טען לפני סקריפטים שצורכים את window.SITE (למשל animations.js).
 */
window.SITE = {
    /** שם קצר לזיהוי בטפסים וב־API (למשל מזהי דיון בגיליון) */
    slug: 'kibud-horim',

    meta: {
        defaultTitle: 'אור ישראלי · כיבוד הורים',
        description:
            'תוכנית חווייתית לנוער בנושא כיבוד הורים — פעילות קבוצתית, שעשועון שבועי והגרלות.',
        themeColor: '#0056b3'
    },

    program: {
        headline: 'כיבוד אב ואם',
        subtitle: "התוכנית החינוכית מחזור ו' של אור ישראלי",
        shortLabel: 'כיבוד הורים',
        /** טקסט חופשי לדף הבית — שפה חווייתית */
        tagline:
            'יחד חווים משמעות של מחווה, כבוד וחיבור במשפחה — עם שיח קבוצתי, שעשועון שבועי והגרלות.'
    },

    /** נתיבים — עדכן כשמחליפים קבצי PDF / מצגת */
    assets: {
        bookletPdf: 'assets/docs/hovert_ben_meitzarim.pdf',
        bookletViewerTitle: 'חומרי הפעילות — דפדוף',
        heroImage: 'assets/images/kibud-horim-hero.png'
    },

    /** דגלים לפיצ׳רים עתידיים (השאר false במחזור הזה) */
    features: {
        podcastPage: false,
        showPodcastNav: false
    },

    /** מזהי דיון בגיליון (Apps Script) — לעדכן בהתאם לטאבים בגוגל שיטס */
    discussions: {
        listening: 'kibud-hitkashvut',
        helpingHome: 'kibud-ozer-bayit'
    },

    share: {
        title: 'אור ישראלי · כיבוד הורים',
        text:
            'הצטרפו לתוכנית החווייתית בנושא כיבוד הורים — פעילות, שעשועון והגרלות 🌟\nפרטים באתר:'
    },

    /** קישורים חיצוניים — עדכן במחזור חדש */
    links: {
        whatsappUpdates:
            'https://chat.whatsapp.com/FT2N0k77sA25HrTvTR4PEb?mode=gi_t'
    }
};
