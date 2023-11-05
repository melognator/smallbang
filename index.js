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
    fontFamily: '',
    fontWeigth: '',
    scrollAnimations: '',
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
        primary: '#E83232',
        primaryLight: '#E83232',
    },
    'green': {
        primary: '#1CD73A',
        primaryLight: '#1CD73A',
    },
    'blue': {
        primary: '#1598E2',
        primaryLight: '#1598E2',
    },
    'orange': {
        primary: '#EC732F',
        primaryLight: '#EC732F',
    },
    'purple': {
        primary: '#9444E4',
        primaryLight: '#9444E4',
    },
    'turquoise': {
        primary: '#3CDFCC',
        primaryLight: '#3CDFCC',
    },

}

const bordersOptions = {
    ['Squared']: 'squared',
    ['Rounded']: 'rounded',
}

const borders = {
    'squared': '2px',
    'rounded': '8px',
}

const borderSizes = {
    'confident': '2px',
    'standard': '2px',
    'elegant': '1px',
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
            default: 'Brand New Website!',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Website description:',
            default: '',
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
    if (themeOptions[answers.scheme] === 'black-and-white') {
        setup.scheme = colorSchemeOptions[answers.theme];
    } else {
        setup.scheme = colorSchemeOptions[answers.scheme];
    }
    setup.borders = bordersOptions[answers.borders];
    setup.fontFamily = fontFamilyOptions[answers.fontFamily];
    setup.fontWeigth = fontWeigthOptions[answers.fontWeigth];
    setup.scrollAnimations = scrollAnimationsOptions[answers.scrollAnimations];
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
    globalStylesContent = globalStylesContent.replace('/primary/', colorSchemes[setup.scheme].primary);
    globalStylesContent = globalStylesContent.replace('/primarylight/', colorSchemes[setup.scheme].primaryLight);
    globalStylesContent = globalStylesContent.replace('/background/', themes[setup.theme].background);
    globalStylesContent = globalStylesContent.replace('/navbarbackground/', themes[setup.theme].background);
    globalStylesContent = globalStylesContent.replace('/color/', themes[setup.theme].color);
    globalStylesContent = globalStylesContent.replace('/borders/', borders[setup.borders]);
    globalStylesContent = globalStylesContent.replace('/bordersize/', borderSizes[setup.fontWeigth]);
    globalStylesContent = globalStylesContent.replace('/centeredwidth/', screenTypes[setup.screen].centeredWidth);
    globalStylesContent = globalStylesContent.replace('/centeredwidthbreakpoint/', screenTypes[setup.screen].centeredWidthBreakpoint);

    fs.writeFileSync(globalStyles, globalStylesContent);

    // modify src/pages/index.astro
    const indexPage = path.join(dir, 'src', 'pages', 'index.astro');
    let indexPageContent = fs.readFileSync(indexPage, 'utf8');

    indexPageContent = indexPageContent.replace('$title$', setup.title);
    indexPageContent = indexPageContent.replace('$description$', setup.description);

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
    let extraLinks = `{
        text: 'Contact',
        url: '#contact'
    },
    {
        text: 'About us',
        url: '#about'
    },
`;

    navbarLinksContent = navbarLinksContent.replace('$hometext$', languageTexts[setup.language].home);
    navbarLinksContent= navbarLinksContent.replace('$extralinks$', extraLinks);
}

const finishMessage = () => {
    console.log(chalk.greenBright('Project created successfully!'));
    console.log(chalk.blueBright('Run the following commands to start developing:'));
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
