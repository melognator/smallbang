#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const setup = {
    name: '',
    title: '',
    description: '',
    language: '',
    screen: '',
    theme: '',
    scheme: '',
    borders: '',
    buttonType: '',
    fontFamily: '',
    fontWeigth: '',
    scrollAnimations: '',
}

const sections = {
    hero: false,
    items: false,
    information: false,
    gallery: false,
    pricing: false,
    testimonials: false,
    contact: false,
    footer: false,
}

const sectionsOptions = {
    ['Hero']: 'hero',
    ['Items']: 'items',
    ['Information']: 'information',
    ['Gallery']: 'gallery',
    ['Pricing']: 'pricing',
    ['Testimonials']: 'testimonials',
    ['Contact Form']: 'contact',
    ['Footer']: 'footer',
}

const languageOptions = {
    ['English']: 'en',
    ['Spanish']: 'es',
    ['Portuguese']: 'pt',
    ['French']: 'fr',
    ['German']: 'de',
}

const languageTexts = {
    'en': {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
    },
    'es': {
        home: 'Inicio',
        about: 'Acerca de',
        contact: 'Contacto',
    },
    'pt': {
        home: 'Início',
        about: 'Sobre',
        contact: 'Contato',
    },
    'fr': {
        home: 'Accueil',
        about: 'À propos',
        contact: 'Contact',
    },
    'de': {
        home: 'Startseite',
        about: 'Über',
        contact: 'Kontakt',
    },
}

const screenOptions = {
    ['Full']: 'full',
    ['Compact']: 'compact',
}

const screenTypes = {
    'full': {
        centeredWidth: '100%',
        centeredWidthBreakpoint: '100%',
    },
    'compact': {
        centeredWidth: '1200px',
        centeredWidthBreakpoint: '1250px',
    },
}

const themeOptions = {
    [chalk.bgWhiteBright('Light')]: 'light',
    [chalk.bgBlack('Dark')]: 'dark',
}

const themes = {
    'light': {
        background: '#FFFFFF',
        color: '#1E1E20',
    },
    'dark': {
        background: '#1E1E20',
        color: '#FFFFFF',
    },
}

const colorSchemeOptions = {
    [chalk.whiteBright('Black and white')]: 'black-and-white',
    [chalk.redBright('Red')]: 'red',
    [chalk.green('Green')]: 'green',
    [chalk.blue('Blue')]: 'blue',
    [chalk.hex('#FF5F1F')('Orange')]: 'orange',
    [chalk.magenta('Purple')]: 'purple',
    [chalk.cyan('Turquoise')]: 'turquoise',
}

const colorSchemes = {
    'light': {
        primary: '#1E1E20',
        primaryLight: '#1E1E20',
    },
    'dark': {
        primary: '#FFFFFF',
        primaryLight: '#FFFFFF',
    },
    'red': {
        primary: '#DE2121',
        primaryLight: '#F14B4B',
    },
    'green': {
        primary: '#0CCE2B',
        primaryLight: '#30EA4D',
    },
    'blue': {
        primary: '#0B93F4',
        primaryLight: '#4BB0F8',
    },
    'orange': {
        primary: '#E35E11',
        primaryLight: '#EA7534',
    },
    'purple': {
        primary: '#8A2EE5',
        primaryLight: '#B371F4',
    },
    'turquoise': {
        primary: '#0BA08F',
        primaryLight: '#21DEC8',
    },

}

const bordersOptions = {
    ['Squared']: 'squared',
    ['Rounded']: 'rounded',
}

const borders = {
    'squared': '0.125rem',
    'rounded': '0.5rem',
}

const imageBorders = {
    'squared': '0.125rem',
    'rounded': '1.5rem',
}

const borderSizes = {
    'confident': '2px',
    'standard': '2px',
    'elegant': '1px',
}

const buttonsOptions = {
    ['Normal']: 'normal',
    ['Pill']: 'pill',
}

const buttons = {
    'normal': 'var(--border-radius)',
    'pill': '51rem',
}

const fontFamilyOptions = {
    ['Montserrat']: 'montserrat',
    ['Open Sans']: 'open-sans',
    ['Roboto']: 'roboto',
    ['Ubuntu']: 'ubuntu',
    ['Inter']: 'inter',
    ['Lato']: 'lato',
    ['Jost']: 'jost',
}

const fontFamilies = {
    'montserrat': {
        url: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap',
        name: 'Montserrat'
    },
    'open-sans': {
        url: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap',
        name: 'Open Sans'
    },
    'roboto': {
        url: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',
        name: 'Roboto'
    },
    'ubuntu': {
        url: 'https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap',
        name: 'Ubuntu'
    },
    'inter': {
        url: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
        name: 'Inter'
    },
    'lato': {
        url: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;500;600;700&display=swap',
        name: 'Lato'
    },
    'jost': {
        url: 'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700&display=swap',
        name: 'Jost'
    },
}

const fontWeigthOptions = {
    [chalk.hex('#ffffff').bold('Confident (bold)')]: 'confident',
    [chalk.white('Standard (regular)')]: 'standard',
    [chalk.grey('Elegant (light)')]: 'elegant',
}

const fontWeigths = {
    'confident': {
        title: '700',
        text: '500'
    },
    'standard': {
        title: '500',
        text: '400'
    },
    'elegant': {
        title: '400',
        text: '300'
    },
}

const scrollAnimationsOptions = {
    ['Yes']: 'yes',
    ['No']: 'no',
}

const scrollAnimations = {
    'yes': {
        css: '<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />',
        script: `<script is:inline src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script is:inline>
            AOS.init({
                duration: 750,
            });
        </script>`,
        styles: `.aosWrapper {
    display: flex;
    flex-direction: column;
}`,
        hero: [
            {
                replace: '$aos1$',
                for: ' data-aos="fade-up" data-aos-delay={150*0}',
            },
            {
                replace: '$aos2$',
                for: ' data-aos="fade-up" data-aos-delay={150*1}',
            },
            {
                replace: '$aos3$',
                for: ' data-aos="fade-up" data-aos-delay={150*2}',
            },
            {
                replace: '$aosspan1$',
                for: '\n                <span data-aos="fade-up" data-aos-delay={150*3}>',
            },
            {
                replace: '$aosspan2$',
                for: '\n                </span>',
            },
            {
                replace: '$extratab$',
                for: '    ',
            },
        ],
        items: [
            {
                replace: '$aos$',
                for: `
                            data-aos="fade-up" 
                            data-aos-delay={150*index}
                            `,
            }
        ],
        information: [
            {
                replace: '$aos1$',
                for: ' data-aos="zoom-in" data-aos-duration={500}',
            },
            {
                replace: '$aosspan1$',
                for: '\n                    <span data-aos="zoom-in" data-aos-duration={500} data-aos-delay={150}>',
            },
            {
                replace: '$aosspan2$',
                for: '\n                    </span>',
            },
            {
                replace: '$extratab$',
                for: '    ',
            },
        ],
        gallery: [
            {
                replace: '$aos1$',
                for: ' data-aos="fade-right" data-aos-delay={150*0}',
            },
            {
                replace: '$aos2$',
                for: ' data-aos="fade-left" data-aos-delay={150*1}',
            },
            {
                replace: '$aos3$',
                for: ' data-aos="fade-up" data-aos-delay={150*0}',
            },
            {
                replace: '$aos4$',
                for: ' data-aos="fade-up" data-aos-delay={150*1}',
            },
            {
                replace: '$aos5$',
                for: ' data-aos="fade-up" data-aos-delay={150*2}',
            },
        ],
        pricing: [
            {
                replace: '$aos$',
                for: `
                            data-aos="fade-up" 
                            data-aos-delay={150*index}`
            }
        ],
        testimonials: [
            {
                replace: '$aos$',
                for: `
                            data-aos="fade-up" 
                            data-aos-delay={150*index}`,
            }
        ],
        contact: [
            {
                replace: '$aos1$',
                for: ' data-aos="fade-up"',
            },
            {
                replace: '$aosspan1$',
                for: `
                        <span className="aosWrapper" data-aos="fade-up">`,
            },
            {
                replace: '$aosspan2$',
                for: `
                        </span>`,
            },
        ],
        footer: [
            {
                replace: '$aosspan1$',
                for: '\n                                <span key={index} data-aos="fade-down" data-aos-duration={500} data-aos-delay={100*index}>'
            },
            {
                replace: '$aosspan2$',
                for: '\n                                </span>'
            },
            {
                replace: '$extratab$',
                for: '    ',
            },
        ]

    },
    'no': {
        css: '',
        script: '',
        styles: '',
    },
}

const checkDirExists = (name) => {
    const dir = path.join(process.cwd(), name);
    if (fs.existsSync(dir)) {
        console.log(chalk.redBright('Project already exists'));
        return true;
    }
    return false;
}

const setupQuestions = async () => {
    const name = await inquirer.prompt({
        type: 'input',
        name: 'value',
        message: 'Project name:',
        default: 'new-project',
    });

    if (checkDirExists(name.value)) {
        return false;
    }

    const answers = await inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Website title:',
            default: 'Smallbang',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Website description:',
            default: 'Work in progress...',
        },
        {
            type: 'list',
            name: 'language',
            message: 'Website language:',
            choices: Object.keys(languageOptions),
        },
        {
            type: 'list',
            name: 'screen',
            message: 'Screen size:',
            choices: Object.keys(screenOptions),
        },
        {
            type: 'list',
            name: 'theme',
            message: 'Theme:',
            choices: Object.keys(themeOptions),
        },
        {
            type: 'list',
            name: 'scheme',
            message: 'Color scheme:',
            choices: Object.keys(colorSchemeOptions),
        },
        {
            type: 'list',
            name: 'borders',
            message: 'Borders:',
            choices: Object.keys(bordersOptions),
        },
        {
            type: 'list',
            name: 'buttonType',
            message: 'Button type:',
            choices: Object.keys(buttonsOptions),
        },
        {
            type: 'list',
            name: 'fontFamily',
            message: 'Font family:',
            choices: Object.keys(fontFamilyOptions),
        },
        {
            type: 'list',
            name: 'fontWeigth',
            message: 'Font weigth:',
            choices: Object.keys(fontWeigthOptions),
        },
        {
            type: 'list',
            name: 'scrollAnimations',
            message: 'Scroll animations:',
            choices: Object.keys(scrollAnimationsOptions),
        }
    ])

    setup.name = name.value;
    setup.title = answers.title;
    setup.description = answers.description;
    setup.language = languageOptions[answers.language];
    setup.screen = screenOptions[answers.screen];
    setup.theme = themeOptions[answers.theme];
    if (colorSchemeOptions[answers.scheme] === 'black-and-white') {
        setup.scheme = themeOptions[answers.theme];
    } else {
        setup.scheme = colorSchemeOptions[answers.scheme];
    }
    setup.borders = bordersOptions[answers.borders];
    setup.buttonType = buttonsOptions[answers.buttonType];
    setup.fontFamily = fontFamilyOptions[answers.fontFamily];
    setup.fontWeigth = fontWeigthOptions[answers.fontWeigth];
    setup.scrollAnimations = scrollAnimationsOptions[answers.scrollAnimations];

    const sectionsAnswer = await inquirer.prompt([
        {
            type: 'checkbox',
            name: 'sections',
            pageSize: 10,
            message: 'Sections:',
            choices: [
                {
                    name: 'Hero',
                    checked: true,
                },
                {
                    name: 'Items',
                    checked: false,
                },
                {
                    name: 'Information',
                    checked: false,
                },
                {
                    name: 'Gallery',
                    checked: false,
                },
                {
                    name: 'Pricing',
                    checked: false,
                },
                {
                    name: 'Testimonials',
                    checked: false,
                },
                {
                    name: 'Contact Form',
                    checked: false,
                },
                {
                    name: 'Footer',
                    checked: false,
                },
            ],
        }
    ]);

    sectionsAnswer.sections.forEach(section => {
        sections[sectionsOptions[section]] = true;
    });

    return true;
}

const createProject = async () => {
    const dir = path.join(process.cwd(), setup.name);
    if (fs.existsSync(dir)) {
        console.log(chalk.redBright('Project already exists'));
        return;
    }

    fs.mkdirSync(dir);

    // copy all content of template folder and rename it to project name
    const template = path.join(__dirname, 'template');
    fs.cpSync(template, dir, { recursive: true });

    fs.renameSync(
        path.join(dir, 'gitignore'),
        path.join(dir, '.gitignore')
    );

    // modify styles/global.css based on setup
    const globalStyles = path.join(dir, 'src', 'styles', 'global.css');
    let globalStylesContent = fs.readFileSync(globalStyles, 'utf8');

    globalStylesContent = globalStylesContent.replace('/fonturl/', fontFamilies[setup.fontFamily].url);
    globalStylesContent = globalStylesContent.replace('/fontname/', fontFamilies[setup.fontFamily].name);
    globalStylesContent = globalStylesContent.replace('/titlefontweigth/', fontWeigths[setup.fontWeigth].title);
    globalStylesContent = globalStylesContent.replace('/fontweigth/', fontWeigths[setup.fontWeigth].text);
    if (setup.theme === 'light') {
        globalStylesContent = globalStylesContent.replace('/primary/', colorSchemes[setup.scheme].primary);
        globalStylesContent = globalStylesContent.replace('/primarylight/', colorSchemes[setup.scheme].primaryLight);
    } else {
        globalStylesContent = globalStylesContent.replace('/primary/', colorSchemes[setup.scheme].primaryLight);
        globalStylesContent = globalStylesContent.replace('/primarylight/', colorSchemes[setup.scheme].primary);
    }
    globalStylesContent = globalStylesContent.replace('/background/', themes[setup.theme].background);
    globalStylesContent = globalStylesContent.replace('/navbarbackground/', themes[setup.theme].background);
    globalStylesContent = globalStylesContent.replace('/color/', themes[setup.theme].color);
    globalStylesContent = globalStylesContent.replace('/borders/', borders[setup.borders]);
    globalStylesContent = globalStylesContent.replace('/imageborders/', imageBorders[setup.borders]);
    globalStylesContent = globalStylesContent.replace('/bordersize/', borderSizes[setup.fontWeigth]);
    globalStylesContent = globalStylesContent.replace('/centeredwidth/', screenTypes[setup.screen].centeredWidth);
    globalStylesContent = globalStylesContent.replace('/centeredwidthbreakpoint/', screenTypes[setup.screen].centeredWidthBreakpoint);
    globalStylesContent = globalStylesContent.replace('/buttonborders/', buttons[setup.buttonType]);
    globalStylesContent = globalStylesContent.replace('/aos/', scrollAnimations[setup.scrollAnimations].styles);

    fs.writeFileSync(globalStyles, globalStylesContent);

    // modify src/pages/index.astro
    const indexPage = path.join(dir, 'src', 'pages', 'index.astro');
    let indexPageContent = fs.readFileSync(indexPage, 'utf8');

    indexPageContent = indexPageContent.replace('$title$', setup.title);
    indexPageContent = indexPageContent.replace('$description$', setup.description);

    indexPageContent = indexPageContent.replace('$aoscss$', scrollAnimations[setup.scrollAnimations].css);
    indexPageContent = indexPageContent.replace('$aosscript$', scrollAnimations[setup.scrollAnimations].script);

    fs.writeFileSync(indexPage, indexPageContent);

    // modify package.json
    const packageJson = path.join(dir, 'package.json');
    let packageJsonContent = fs.readFileSync(packageJson, 'utf8');

    packageJsonContent = packageJsonContent.replace('$name$', setup.name);

    fs.writeFileSync(packageJson, packageJsonContent);

    // modify src/components/common/Navbar/texts.js
    const navbarTexts = path.join(dir, 'src', 'components', 'common', 'Navbar', 'texts.js');
    let navbarTextsContent = fs.readFileSync(navbarTexts, 'utf8');

    navbarTextsContent = navbarTextsContent.replace('$title$', setup.title);

    fs.writeFileSync(navbarTexts, navbarTextsContent);

    // modify src/components/common/Navbar/links.js
    
    const navbarLinks = path.join(dir, 'src', 'components', 'common', 'Navbar', 'links.js');
    let navbarLinksContent = fs.readFileSync(navbarLinks, 'utf8');
    
    // indentation of 4 spaces
    let extraLinks = '';

    Object.keys(sections).forEach(section => {
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        if (sections[section] && section !== 'hero' && section !== 'footer') {
            extraLinks += `{
        text: '${sectionName}',
        url: '#${section}'
    },\n    `;
        }
    })

    navbarLinksContent = navbarLinksContent.replace('$hometext$', languageTexts[setup.language].home);
    navbarLinksContent = navbarLinksContent.replace('$extralinks$', extraLinks);

    fs.writeFileSync(navbarLinks, navbarLinksContent);

    // modify src/pages/index.astro
    const indexAstro = path.join(dir, 'src', 'pages', 'index.astro');
    let indexAstroContent = fs.readFileSync(indexAstro, 'utf8');

    let sectionsImport = '';

    Object.keys(sections).forEach(section => {
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        if (sections[section]) {
            sectionsImport += `import ${sectionName} from '../components/sections/${sectionName}';\n`;
        }
    })

    let sectionsChildren = '';

    Object.keys(sections).forEach(section => {
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        if (sections[section]) {
            sectionsChildren += `<${sectionName} />\n            `;
        }
    })

    indexAstroContent = indexAstroContent.replace('$language$', setup.language);
    indexAstroContent = indexAstroContent.replace('$sectionsimport$', sectionsImport);
    indexAstroContent = indexAstroContent.replace('$sections$', sectionsChildren);

    fs.writeFileSync(indexAstro, indexAstroContent);

    // modify src/components/templates/Hero/component.module.css
    const heroStyles = path.join(dir, 'src', 'components', 'templates', 'Hero', 'component.module.css');
    let heroStylesContent = fs.readFileSync(heroStyles, 'utf8');
    if (setup.screen === 'compact') {
        
            heroStylesContent = heroStylesContent.replace('$aligment$', 
`@media (min-width: 1250px) {
    .content {
        align-items: start;
        text-align: left;
    }
}`);
    } else {
        heroStylesContent = heroStylesContent.replace('$aligment$', '');
    }

    fs.writeFileSync(heroStyles, heroStylesContent);

    // modify src/components/templates/Footer/component.module.css
    const footerStyles = path.join(dir, 'src', 'components', 'templates', 'Footer', 'component.module.css');
    let footerStylesContent = fs.readFileSync(footerStyles, 'utf8');

    if (setup.screen === 'compact') {
        footerStylesContent = footerStylesContent.replace('$aligment$',
`@media (min-width: 768px) {
    .content {
        flex-direction: row;
        justify-content: space-between;
    }

    .left {
        align-items: start;
        text-align: left;
    }

    .right {
        align-items: center;
    }
}`);
    } else {
        footerStylesContent = footerStylesContent.replace('$aligment$', '');
    }

    fs.writeFileSync(footerStyles, footerStylesContent);

    // modify src/components/templates/Pricing/component.module.css
    const pricingStyles = path.join(dir, 'src', 'components', 'templates', 'Pricing', 'component.module.css');
    let pricingStylesContent = fs.readFileSync(pricingStyles, 'utf8');

    pricingStylesContent = pricingStylesContent.replace('$background$', setup.theme === 'dark' ? '#232325' : 'transparent');

    fs.writeFileSync(pricingStyles, pricingStylesContent);

    // modify src/components/templates/Testimonials/component.module.css
    const testimonialsStyles = path.join(dir, 'src', 'components', 'templates', 'Testimonials', 'component.module.css');
    let testimonialsStylesContent = fs.readFileSync(testimonialsStyles, 'utf8');

    testimonialsStylesContent = testimonialsStylesContent.replace('$background$', setup.theme === 'dark' ? '#232325' : 'transparent');

    fs.writeFileSync(testimonialsStyles, testimonialsStylesContent);

    // modify all src/templates to adjust to setup
    const hero = path.join(dir, 'src', 'components', 'templates', 'Hero', 'index.jsx');
    let heroContent = fs.readFileSync(hero, 'utf8');

    const items = path.join(dir, 'src', 'components', 'templates', 'Items', 'index.jsx');
    let itemsContent = fs.readFileSync(items, 'utf8');

    const information = path.join(dir, 'src', 'components', 'templates', 'Information', 'index.jsx');
    let informationContent = fs.readFileSync(information, 'utf8');

    const gallery = path.join(dir, 'src', 'components', 'templates', 'Gallery', 'index.jsx');
    let galleryContent = fs.readFileSync(gallery, 'utf8');

    const pricing = path.join(dir, 'src', 'components', 'templates', 'Pricing', 'index.jsx');
    let pricingContent = fs.readFileSync(pricing, 'utf8');

    const testimonials = path.join(dir, 'src', 'components', 'templates', 'Testimonials', 'index.jsx');
    let testimonialsContent = fs.readFileSync(testimonials, 'utf8');

    const contact = path.join(dir, 'src', 'components', 'templates', 'Contact', 'index.jsx');
    let contactContent = fs.readFileSync(contact, 'utf8');

    const footer = path.join(dir, 'src', 'components', 'templates', 'Footer', 'index.jsx');
    let footerContent = fs.readFileSync(footer, 'utf8');

    if (setup.scrollAnimations === 'yes') {
        scrollAnimations['yes'].hero.forEach(item => {
            heroContent = heroContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].items.forEach(item => {
            itemsContent = itemsContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].information.forEach(item => {
            informationContent = informationContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].gallery.forEach(item => {
            galleryContent = galleryContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].pricing.forEach(item => {
            pricingContent = pricingContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].testimonials.forEach(item => {
            testimonialsContent = testimonialsContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].footer.forEach(item => {
            footerContent = footerContent.replaceAll(item.replace, item.for);
        })
        scrollAnimations['yes'].contact.forEach(item => {
            contactContent = contactContent.replaceAll(item.replace, item.for);
        })
    } else {
        scrollAnimations['yes'].hero.forEach(item => {
            heroContent = heroContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].items.forEach(item => {
            itemsContent = itemsContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].information.forEach(item => {
            informationContent = informationContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].gallery.forEach(item => {
            galleryContent = galleryContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].pricing.forEach(item => {
            pricingContent = pricingContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].testimonials.forEach(item => {
            testimonialsContent = testimonialsContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].footer.forEach(item => {
            footerContent = footerContent.replaceAll(item.replace, '');
        })
        scrollAnimations['yes'].contact.forEach(item => {
            contactContent = contactContent.replaceAll(item.replace, '');
        })
    }
    
    fs.writeFileSync(hero, heroContent);
    fs.writeFileSync(items, itemsContent);
    fs.writeFileSync(information, informationContent);
    fs.writeFileSync(gallery, galleryContent);
    fs.writeFileSync(pricing, pricingContent);
    fs.writeFileSync(testimonials, testimonialsContent);
    fs.writeFileSync(contact, contactContent);
    fs.writeFileSync(footer, footerContent);

    // copy template section folder based on enabled sections
    const templatesDir = path.join(dir, 'src', 'components', 'templates');
    
    // copy hero to src/components/sections
    Object.keys(sections).forEach(section => {
        const sectionName = section.charAt(0).toUpperCase() + section.slice(1);
        if (sections[section]) {
            const sectionDir = path.join(templatesDir, sectionName);
            fs.cpSync(sectionDir, path.join(dir, 'src', 'components', 'sections', sectionName), { recursive: true });
        }
    })

    // modify src/components/common/Navbar/index.jsx  $primary$
    const navbar = path.join(dir, 'src', 'components', 'common', 'Navbar', 'index.jsx');
    let navbarContent = fs.readFileSync(navbar, 'utf8');

    navbarContent = navbarContent.replace('$primary$', colorSchemes[setup.scheme].primary);

    fs.writeFileSync(navbar, navbarContent);

    
}

const finishMessage = () => {
    console.log(chalk.greenBright('Project created successfully!'));
    console.log(chalk.yellow('Run the following commands to start developing:'));
    console.log((`cd ${setup.name}`));
    console.log(('npm install'));
    console.log(('npm run dev'));
}

const main = async () => {
    const status = await setupQuestions();
    if (!status) {
        return;
    }
    await createProject();
    finishMessage();
}

await main()
