import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          links: {
            projects: 'Projects',
            experience: 'Experiences',
            about: 'About'
          },
          landing: {
            occupation:'SOFTWARE ENGINEER',
            title:'Hello, I am ',
            name: 'Valentin Magot',
            description:'I am a software engineer based in Ottawa, Canada. I gratuated from the University of Ottawa in 2021 and currently working as a Salesforce SysAdmin for Shared Services Canada (SSC).',
         },
         projects: {
          title: 'Projects',
          fitgive: 'FitGive is a web app that encourages users to exercise on a daily basis by challenging their friends and pledging on an agreed amount of money to the success of the challenge. The winner of the challenge will be able to retrieve their portion of the stake, while the rest of the stake will be donated to a selected charity.',
          cucpup: 'Contributed to build a Node.js template for end-to-end testing your app with Cucumber.js and Puppeteer. Published on NPM with currently around 250 downloads a week.',
          uzer: 'Uzer is a Web Application that allows regular people and organizations to share their wireless/data network and provide Internet access to numerous paying customers generating extra income from them.',
         },
         experience: {
          title: 'Experience',
          cbs_title:'Shared Services Canada (CBS)',
          pspc_title:'Public Services and Procurement Canada',
          eccc_title:'Environnement and Climate Change Canada',
          cbs: 'Working as a Salesforce System Administrator and Developer in order to configure the Cloud Brokering Service, a portal that allows departments, ministries, or any clients to adopt cloud technologies from cloud providers such as Amazon, Microsoft, IBM, and many more. Learn more about my experience in my ',
          pspc: 'Worked on an end-to-end testing framework called Cucumber-Puppeteer in order to test the Gcdocs mobile project. Assist in the Gcdocs mobile project that allows Gcdocs users to have a mobile version of the software using ActiveView, REST API calls, and HTML, CSS, and JavaScript. Learn more about my experience in my ',
          eccc: 'In this position, I was responsible for designing and building a database to assist ECCC in better managing, coordinating, and making linkages to issues highlighted in correspondence with the SJCSR. The front end of the database was built with VBA for a better user experience for the managers. Learn more about my experience in my ',
         },
         about: {
          title: 'About me',
          content: 'To hone my software engineering skills, I like to participate in the capture the flags (CTF) competition and I would really like to learn more about cybersecurity. I am also a fitness enthusiast and I love to ride a motorcycle in my free time.'
         },
         resume: 'resume',
         button: {
            resume: 'Resume',
            linkedin: 'LinkedIn',
            project: 'View Project',
            contact: 'Get in touch'
         }
        }
      },
      fr: {
        translation: {
          links: {
            projects: 'Projets',
            experience: 'Qualifications',
            about: 'À propos'
          },
          landing: {
            occupation:'INGÉNIEUR LOGICIEL',
            title:'Bonjour, je suis ',
            name: 'Valentin Magot',
            description:'Je suis ingénieur logiciel basé à Ottawa (Canada), diplômé de l\'Université d\'Ottawa en 2021. Actuellement, Je travaille en qualité d\'Administrateur Système Salesforce pour le gouvernement fédéral (Services Partagés Canada - SPC).',
         },
         projects: {
          title: 'Projets',
          fitgive: 'Fit Give est une application Web qui encourage les utilisateurs à faire de l\'exercice physique quotidiennement en défiant leurs amis et en s\'engageant sur une somme d\'argent mise en jeu et  convenue pour le succès du défi. Le gagnant du défi pourra récupérer sa mise de départ, tandis que le reste de la mise des gains sera reversé à un organisme de bienfaisance sélectionné.',
          cucpup: 'J\'ai contribué à la construction d\'un modèle (cadriciel) node.js pour tester de bout en bout votre application avec Cucumber.js et Puppeteer. Publié sur NPM et compte actuellement environ 250 téléchargements par semaine.',
          uzer: 'Uzer est une application Web qui permet aux particuliers et aux organisations de partager leur réseau sans fil/de données et de fournir un accès Internet à de nombreux clients générant des revenus supplémentaires.',
         },
         experience: {
          title: 'Qualifications',
          cbs_title:'Services Partagés Canada (SPC)',
          pspc_title:'Services Publics et Approvisionnement Canada',
          eccc_title:'Environnement et Changement Climatique Canada',
          cbs: 'Je travail en tant qu\'Administrateur Système et Développeur Salesforce afin de configurer le Service de courtage infonuagique.Il s\'agit d\'un portail qui permet aux départements, ministères ou à tout client d\'adopter des technologies infonuagique de fournisseurs de cloud tels qu\'Amazon, Microsoft, IBM et bien d\'autres. Pour plus de détail sur mes compétences veuillez consulter mon ',
          pspc: 'J’ai collaboré sur un cadriciel (framework) de test de bout en bout appelé Cucumber-Puppeteer afin de tester le projet mobile Gcdocs. J\'ai participé au projet mobile Gcdocs qui permet aux utilisateurs de Gcdocs d\'avoir une version mobile du logiciel en utilisant ActiveView ainsi que les appels d\'API REST, HTML, CSS et JavaScript. Pour plus de détail sur mes compétences veuillez consulter mon ',
          eccc: 'À ce poste, j\'étais responsable de la conception et développement d\'une base de données pour aider ECCC à mieux gérer, coordonner et établir des liens avec les questions mises en évidence dans la correspondance avec le CMPER. Le UI de la base de données a été construit avec VBA permettant une meilleure experience utilisateur pour les gestionnaires. Pour plus de détail sur mes compétences veuillez consulter mon ',
         },
         resume: 'CV',
         about: {
          title: 'À propos de moi',
          content: 'Pour perfectionner mes compétences en génie logiciel, j\'aime participer au concours de capture de drapeaux (CTF) et j\'aimerais beaucoup en apprendre davantage sur la cybersécurité. Je suis aussi un passionné de fitness et j\'adore faire de la moto pendant mon temps libre.'
         },
         button: {
          resume: 'Curriculum Vitae',
          linkedin: 'LinkedIn',
          project: 'Voir le projet',
          contact: 'Entrer en contact'
       }
        }
      }
    }
  });

export default i18n;