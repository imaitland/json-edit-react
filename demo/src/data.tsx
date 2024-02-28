import React from 'react'
import { Flex, Box, Link, Text } from '@chakra-ui/react'
import { dateNodeDefinition } from './customComponents/DateTimePicker'
import {
  CustomNodeDefinition,
  FilterFunction,
  CustomTextDefinitions,
  LinkCustomNodeDefinition,
} from './JsonEditImport'
import { DataType, DefaultValueFunction, ThemeStyles } from './json-edit-react/src/types'

interface DemoData {
  name: string
  description: JSX.Element
  data: object
  rootName?: string
  collapse?: number
  restrictEdit?: FilterFunction
  restrictDelete?: FilterFunction
  restrictAdd?: FilterFunction
  restrictTypeSelection?: boolean | DataType[]
  defaultValue?: unknown | DefaultValueFunction
  customNodeDefinitions?: CustomNodeDefinition[]
  customTextDefinitions?: CustomTextDefinitions
  styles?: Partial<ThemeStyles>
}

const data: Record<string, DemoData> = {
  intro: {
    name: '📘 Intro',
    description: (
      <Flex flexDir="column" gap={2}>
        <Text>Play around with the JSON structure, and test out various options above.</Text>
        <Text>
          There are a range of different demo data sets to play with. The data and custom
          definitions for all demo data can be found in the repo{' '}
          <Link
            href="https://github.com/CarlosNZ/json-edit-react/blob/main/demo/src/data.tsx"
            isExternal
          >
            here
          </Link>
          .
        </Text>
        <Text>Incorporate into your own React project:</Text>
        <Box fontSize="sm">
          <Text pl={3}>
            <span className="code">npm i json-edit-react</span>
            <br />
            <span style={{ paddingLeft: 10 }}>or:</span>
            <br />
            <span className="code">yarn add json-edit-react</span>
          </Text>
        </Box>
      </Flex>
    ),
    collapse: 2,
    data: {
      string: 'Welcome to the Editor 😀',
      number: 99,
      boolean: true,
      nothing: null,
      Usage: [
        'Edit a value by clicking the "edit" icon, or double-clicking the value.',
        'You can change the type of any value',
        'You can add new values to objects or arrays',
        'You can edit individual values, or even a whole object node at once (as JSON text)',
        {
          nested: 'An object inside an array',
          basic: false,
          value: 6.66,
        },
      ],
      'Keyboard interaction': {
        '"Enter" to submit change': '(or Ctrl/Cmd-Enter when editing whole JSON nodes)',
        '"Escape" to cancel': '👍',
        'To start a new line': 'Shift/Ctrl/Cmd-Enter (or just "Enter" when editing JSON nodes)',
        'When copying to clipboard': 'Hold down "Ctrl/Cmd" to copy path instead of data',
        'When opening/closing a node':
          'Hold down "Alt/Option" to open/close ALL child nodes at once',
      },
    },
    customNodeDefinitions: [dateNodeDefinition],
  },
  starWars: {
    name: '🚀 Star Wars',
    description: (
      <Flex flexDir="column" gap={2}>
        <Text>
          A massive chunk of <em>Star Wars</em> data scraped from{' '}
          <Link href="https://swapi.dev/" isExternal>
            <strong>The Star Wars API</strong>
          </Link>
        </Text>
        <Text>
          Note the additional editing restrictions in addition to the toggles above. This has been
          achieved by specifying filter functions for the <span className="code">restrictEdit</span>
          , <span className="code">restrictDelete</span>, <span className="code">restrictAdd</span>{' '}
          and <span className="code">restrictTypeSelection</span> props.{' '}
          <Link href="https://github.com/CarlosNZ/json-edit-react#readme" isExternal>
            Learn more
          </Link>
        </Text>
        <Text>
          Also, notice the ISO date strings are editable by a date picker control, and URL strings
          are active links — these are{' '}
          <Link href="https://github.com/CarlosNZ/json-edit-react#custom-nodes" isExternal>
            Custom components
          </Link>
          .
        </Text>
      </Flex>
    ),
    restrictEdit: ({ value }) => typeof value === 'object' && value !== null,
    restrictDelete: ({ value }) => typeof value === 'object' && value !== null,
    restrictAdd: ({ value }) => !Array.isArray(value),
    restrictTypeSelection: true,
    collapse: 1,
    customNodeDefinitions: [dateNodeDefinition, LinkCustomNodeDefinition],
    data: {
      name: 'Luke Skywalker',
      height: 172,
      mass: 77,
      hair_color: 'blond',
      skin_color: 'fair',
      eye_color: 'blue',
      birth_year: '19BBY',
      isMale: true,
      homeworld: {
        name: 'Tatooine',
        rotation_period: 23,
        orbital_period: 304,
        diameter: 10465,
        climate: 'arid',
        gravity: '1 standard',
        terrain: 'desert',
        surface_water: 1,
        population: 200000,
        residents: [
          'Luke Skywalker',
          {
            name: 'C-3PO',
            height: 167,
            mass: 75,
            hair_color: 'n/a',
            skin_color: 'gold',
            eye_color: 'yellow',
            birth_year: '112BBY',
            isMale: false,
            homeworld: 'Tatooine',
            films: [
              'A New Hope',
              'The Empire Strikes Back',
              'Return of the Jedi',
              'The Phantom Menace',
              'Attack of the Clones',
              'Revenge of the Sith',
            ],
            species: ['Droid'],
            vehicles: null,
            starships: null,
            created: '2014-12-10T15:10:51.357000Z',
            edited: '2014-12-20T21:17:50.309000Z',
            url: 'https://swapi.dev/api/people/2/',
          },
          {
            name: 'Darth Vader',
            height: 202,
            mass: 136,
            hair_color: 'none',
            skin_color: 'white',
            eye_color: 'yellow',
            birth_year: '41.9BBY',
            isMale: true,
            homeworld: 'Tatooine',
            films: [
              'A New Hope',
              'The Empire Strikes Back',
              'Return of the Jedi',
              'Revenge of the Sith',
            ],
            species: null,
            vehicles: null,
            starships: ['TIE Advanced x1'],
            created: '2014-12-10T15:18:20.704000Z',
            edited: '2014-12-20T21:17:50.313000Z',
            url: 'https://swapi.dev/api/people/4/',
          },
          {
            name: 'Owen Lars',
            height: 178,
            mass: 120,
            hair_color: 'brown, grey',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '52BBY',
            isMale: true,
            homeworld: 'Tatooine',
            films: ['A New Hope', 'Attack of the Clones', 'Revenge of the Sith'],
            species: null,
            vehicles: null,
            starships: null,
            created: '2014-12-10T15:52:14.024000Z',
            edited: '2014-12-20T21:17:50.317000Z',
            url: 'https://swapi.dev/api/people/6/',
          },
          {
            name: 'Beru Whitesun lars',
            height: 165,
            mass: 75,
            hair_color: 'brown',
            skin_color: 'light',
            eye_color: 'blue',
            birth_year: '47BBY',
            isMale: false,
            homeworld: 'Tatooine',
            films: ['A New Hope', 'Attack of the Clones', 'Revenge of the Sith'],
            species: null,
            vehicles: null,
            starships: null,
            created: '2014-12-10T15:53:41.121000Z',
            edited: '2014-12-20T21:17:50.319000Z',
            url: 'https://swapi.dev/api/people/7/',
          },
          {
            name: 'R5-D4',
            height: 97,
            mass: 32,
            hair_color: 'n/a',
            skin_color: 'white, red',
            eye_color: 'red',
            birth_year: 'unknown',
            isMale: false,
            homeworld: 'Tatooine',
            films: ['A New Hope'],
            species: ['Droid'],
            vehicles: null,
            starships: null,
            created: '2014-12-10T15:57:50.959000Z',
            edited: '2014-12-20T21:17:50.321000Z',
            url: 'https://swapi.dev/api/people/8/',
          },
          {
            name: 'Biggs Darklighter',
            height: 183,
            mass: 84,
            hair_color: 'black',
            skin_color: 'light',
            eye_color: 'brown',
            birth_year: '24BBY',
            isMale: true,
            homeworld: 'Tatooine',
            films: ['A New Hope'],
            species: null,
            vehicles: null,
            starships: ['X-wing'],
            created: '2014-12-10T15:59:50.509000Z',
            edited: '2014-12-20T21:17:50.323000Z',
            url: 'https://swapi.dev/api/people/9/',
          },
          {
            name: 'Anakin Skywalker',
            height: 188,
            mass: 84,
            hair_color: 'blond',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '41.9BBY',
            isMale: true,
            homeworld: 'Tatooine',
            films: ['The Phantom Menace', 'Attack of the Clones', 'Revenge of the Sith'],
            species: null,
            vehicles: ['Zephyr-G swoop bike', 'XJ-6 airspeeder'],
            starships: ['Naboo fighter', 'Trade Federation cruiser', 'Jedi Interceptor'],
            created: '2014-12-10T16:20:44.310000Z',
            edited: '2014-12-20T21:17:50.327000Z',
            url: 'https://swapi.dev/api/people/11/',
          },
          {
            name: 'Shmi Skywalker',
            height: 163,
            mass: 'unknown',
            hair_color: 'black',
            skin_color: 'fair',
            eye_color: 'brown',
            birth_year: '72BBY',
            isMale: false,
            homeworld: 'Tatooine',
            films: ['The Phantom Menace', 'Attack of the Clones'],
            species: null,
            vehicles: null,
            starships: null,
            created: '2014-12-19T17:57:41.191000Z',
            edited: '2014-12-20T21:17:50.401000Z',
            url: 'https://swapi.dev/api/people/43/',
          },
          {
            name: 'Cliegg Lars',
            height: 183,
            mass: 'unknown',
            hair_color: 'brown',
            skin_color: 'fair',
            eye_color: 'blue',
            birth_year: '82BBY',
            isMale: true,
            homeworld: 'Tatooine',
            films: ['Attack of the Clones'],
            species: null,
            vehicles: null,
            starships: null,
            created: '2014-12-20T15:59:03.958000Z',
            edited: '2014-12-20T21:17:50.451000Z',
            url: 'https://swapi.dev/api/people/62/',
          },
        ],
        films: [
          {
            title: 'A New Hope',
            episode_id: 4,
            opening_crawl:
              "It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy....",
            director: 'George Lucas',
            producer: 'Gary Kurtz, Rick McCallum',
            release_date: '1977-05-25',
            characters: [
              'Luke Skywalker',
              'C-3PO',
              'R2-D2',
              'Darth Vader',
              'Leia Organa',
              'Owen Lars',
              'Beru Whitesun lars',
              'R5-D4',
              'Biggs Darklighter',
              'Obi-Wan Kenobi',
              'Wilhuff Tarkin',
              'Chewbacca',
              'Han Solo',
              'Greedo',
              'Jabba Desilijic Tiure',
              'Wedge Antilles',
              'Jek Tono Porkins',
              'Raymus Antilles',
            ],
            planets: ['Tatooine', 'Alderaan', 'Yavin IV'],
            starships: [
              'CR90 corvette',
              'Star Destroyer',
              'Sentinel-class landing craft',
              'Death Star',
              'Millennium Falcon',
              'Y-wing',
              'X-wing',
              'TIE Advanced x1',
            ],
            vehicles: ['Sand Crawler', 'T-16 skyhopper', 'X-34 landspeeder', 'TIE/LN starfighter'],
            species: ['Human', 'Droid', 'Wookie', 'Rodian', 'Hutt'],
            created: '2014-12-10T14:23:31.880000Z',
            edited: '2014-12-20T19:49:45.256000Z',
            url: 'https://swapi.dev/api/films/1/',
          },
          {
            title: 'Return of the Jedi',
            episode_id: 6,
            opening_crawl:
              'Luke Skywalker has returned to\r\nhis home planet of Tatooine in\r\nan attempt to rescue his\r\nfriend Han Solo from the\r\nclutches of the vile gangster\r\nJabba the Hutt.\r\n\r\nLittle does Luke know that the\r\nGALACTIC EMPIRE has secretly\r\nbegun construction on a new\r\narmored space station even\r\nmore powerful than the first\r\ndreaded Death Star.\r\n\r\nWhen completed, this ultimate\r\nweapon will spell certain doom\r\nfor the small band of rebels\r\nstruggling to restore freedom\r\nto the galaxy...',
            director: 'Richard Marquand',
            producer: 'Howard G. Kazanjian, George Lucas, Rick McCallum',
            release_date: '1983-05-25',
            characters: [
              'Luke Skywalker',
              'C-3PO',
              'R2-D2',
              'Darth Vader',
              'Leia Organa',
              'Obi-Wan Kenobi',
              'Chewbacca',
              'Han Solo',
              'Jabba Desilijic Tiure',
              'Wedge Antilles',
              'Yoda',
              'Palpatine',
              'Boba Fett',
              'Lando Calrissian',
              'Ackbar',
              'Mon Mothma',
              'Arvel Crynyd',
              'Wicket Systri Warrick',
              'Nien Nunb',
              'Bib Fortuna',
            ],
            planets: ['Tatooine', 'Dagobah', 'Endor', 'Naboo', 'Coruscant'],
            starships: [
              'CR90 corvette',
              'Star Destroyer',
              'Millennium Falcon',
              'Y-wing',
              'X-wing',
              'Executor',
              'Rebel transport',
              'Imperial shuttle',
              'EF76 Nebulon-B escort frigate',
              'Calamari Cruiser',
              'A-wing',
              'B-wing',
            ],
            vehicles: [
              'TIE/LN starfighter',
              'TIE bomber',
              'AT-AT',
              'AT-ST',
              'Sail barge',
              'Bantha-II cargo skiff',
              'TIE/IN interceptor',
              'Imperial Speeder Bike',
            ],
            species: [
              'Human',
              'Droid',
              'Wookie',
              'Hutt',
              "Yoda's species",
              'Mon Calamari',
              'Ewok',
              'Sullustan',
              "Twi'lek",
            ],
            created: '2014-12-18T10:39:33.255000Z',
            edited: '2014-12-20T09:48:37.462000Z',
            url: 'https://swapi.dev/api/films/3/',
          },
          {
            title: 'The Phantom Menace',
            episode_id: 1,
            opening_crawl:
              'Turmoil has engulfed the\r\nGalactic Republic. The taxation\r\nof trade routes to outlying star\r\nsystems is in dispute.\r\n\r\nHoping to resolve the matter\r\nwith a blockade of deadly\r\nbattleships, the greedy Trade\r\nFederation has stopped all\r\nshipping to the small planet\r\nof Naboo.\r\n\r\nWhile the Congress of the\r\nRepublic endlessly debates\r\nthis alarming chain of events,\r\nthe Supreme Chancellor has\r\nsecretly dispatched two Jedi\r\nKnights, the guardians of\r\npeace and justice in the\r\ngalaxy, to settle the conflict....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            release_date: '1999-05-19',
            characters: [
              'C-3PO',
              'R2-D2',
              'Obi-Wan Kenobi',
              'Anakin Skywalker',
              'Jabba Desilijic Tiure',
              'Yoda',
              'Palpatine',
              'Qui-Gon Jinn',
              'Nute Gunray',
              'Finis Valorum',
              'Padmé Amidala',
              'Jar Jar Binks',
              'Roos Tarpals',
              'Rugor Nass',
              'Ric Olié',
              'Watto',
              'Sebulba',
              'Quarsh Panaka',
              'Shmi Skywalker',
              'Darth Maul',
              'Ayla Secura',
              'Ratts Tyerel',
              'Dud Bolt',
              'Gasgano',
              'Ben Quadinaros',
              'Mace Windu',
              'Ki-Adi-Mundi',
              'Kit Fisto',
              'Eeth Koth',
              'Adi Gallia',
              'Saesee Tiin',
              'Yarael Poof',
              'Plo Koon',
              'Mas Amedda',
            ],
            planets: ['Tatooine', 'Naboo', 'Coruscant'],
            starships: [
              'Republic Cruiser',
              'Droid control ship',
              'Naboo fighter',
              'Naboo Royal Starship',
              'Scimitar',
            ],
            vehicles: [
              'Vulture Droid',
              'Multi-Troop Transport',
              'Armored Assault Tank',
              'Single Trooper Aerial Platform',
              'C-9979 landing craft',
              'Tribubble bongo',
              'Sith speeder',
            ],
            species: [
              'Human',
              'Droid',
              "Yoda's species",
              'Neimodian',
              'Gungan',
              'Toydarian',
              'Dug',
              "Twi'lek",
              'Aleena',
              'Vulptereen',
              'Xexto',
              'Toong',
              'Cerean',
              'Nautolan',
              'Zabrak',
              'Tholothian',
              'Iktotchi',
              'Quermian',
              'Kel Dor',
              'Chagrian',
            ],
            created: '2014-12-19T16:52:55.740000Z',
            edited: '2014-12-20T10:54:07.216000Z',
            url: 'https://swapi.dev/api/films/4/',
          },
          {
            title: 'Attack of the Clones',
            episode_id: 2,
            opening_crawl:
              'There is unrest in the Galactic\r\nSenate. Several thousand solar\r\nsystems have declared their\r\nintentions to leave the Republic.\r\n\r\nThis separatist movement,\r\nunder the leadership of the\r\nmysterious Count Dooku, has\r\nmade it difficult for the limited\r\nnumber of Jedi Knights to maintain \r\npeace and order in the galaxy.\r\n\r\nSenator Amidala, the former\r\nQueen of Naboo, is returning\r\nto the Galactic Senate to vote\r\non the critical issue of creating\r\nan ARMY OF THE REPUBLIC\r\nto assist the overwhelmed\r\nJedi....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            release_date: '2002-05-16',
            characters: [
              'C-3PO',
              'R2-D2',
              'Owen Lars',
              'Beru Whitesun lars',
              'Obi-Wan Kenobi',
              'Anakin Skywalker',
              'Yoda',
              'Palpatine',
              'Boba Fett',
              'Nute Gunray',
              'Padmé Amidala',
              'Jar Jar Binks',
              'Watto',
              'Shmi Skywalker',
              'Ayla Secura',
              'Mace Windu',
              'Ki-Adi-Mundi',
              'Kit Fisto',
              'Plo Koon',
              'Mas Amedda',
              'Gregar Typho',
              'Cordé',
              'Cliegg Lars',
              'Poggle the Lesser',
              'Luminara Unduli',
              'Barriss Offee',
              'Dormé',
              'Dooku',
              'Bail Prestor Organa',
              'Jango Fett',
              'Zam Wesell',
              'Dexter Jettster',
              'Lama Su',
              'Taun We',
              'Jocasta Nu',
              'R4-P17',
              'Wat Tambor',
              'San Hill',
              'Shaak Ti',
              'Sly Moore',
            ],
            planets: ['Tatooine', 'Naboo', 'Coruscant', 'Kamino', 'Geonosis'],
            starships: [
              'Slave 1',
              'Droid control ship',
              'Naboo fighter',
              'J-type diplomatic barge',
              'AA-9 Coruscant freighter',
              'Jedi starfighter',
              'H-type Nubian yacht',
              'Republic Assault ship',
              'Solar Sailer',
            ],
            vehicles: [
              'Sand Crawler',
              'Zephyr-G swoop bike',
              'Koro-2 Exodrive airspeeder',
              'XJ-6 airspeeder',
              'LAAT/i',
              'LAAT/c',
              'AT-TE',
              'SPHA',
              'Flitknot speeder',
              'Neimoidian shuttle',
              'Geonosian starfighter',
            ],
            species: [
              'Human',
              'Droid',
              "Yoda's species",
              'Gungan',
              'Toydarian',
              "Twi'lek",
              'Geonosian',
              'Mirialan',
              'Clawdite',
              'Besalisk',
              'Kaminoan',
              'Skakoan',
              'Muun',
              'Togruta',
            ],
            created: '2014-12-20T10:57:57.886000Z',
            edited: '2014-12-20T20:18:48.516000Z',
            url: 'https://swapi.dev/api/films/5/',
          },
          {
            title: 'Revenge of the Sith',
            episode_id: 3,
            opening_crawl:
              'War! The Republic is crumbling\r\nunder attacks by the ruthless\r\nSith Lord, Count Dooku.\r\nThere are heroes on both sides.\r\nEvil is everywhere.\r\n\r\nIn a stunning move, the\r\nfiendish droid leader, General\r\nGrievous, has swept into the\r\nRepublic capital and kidnapped\r\nChancellor Palpatine, leader of\r\nthe Galactic Senate.\r\n\r\nAs the Separatist Droid Army\r\nattempts to flee the besieged\r\ncapital with their valuable\r\nhostage, two Jedi Knights lead a\r\ndesperate mission to rescue the\r\ncaptive Chancellor....',
            director: 'George Lucas',
            producer: 'Rick McCallum',
            release_date: '2005-05-19',
            characters: [
              'Luke Skywalker',
              'C-3PO',
              'R2-D2',
              'Darth Vader',
              'Leia Organa',
              'Owen Lars',
              'Beru Whitesun lars',
              'Obi-Wan Kenobi',
              'Anakin Skywalker',
              'Wilhuff Tarkin',
              'Chewbacca',
              'Yoda',
              'Palpatine',
              'Nute Gunray',
              'Padmé Amidala',
              'Ayla Secura',
              'Mace Windu',
              'Ki-Adi-Mundi',
              'Kit Fisto',
              'Eeth Koth',
              'Adi Gallia',
              'Saesee Tiin',
              'Plo Koon',
              'Poggle the Lesser',
              'Luminara Unduli',
              'Dooku',
              'Bail Prestor Organa',
              'R4-P17',
              'Shaak Ti',
              'Grievous',
              'Tarfful',
              'Raymus Antilles',
              'Sly Moore',
              'Tion Medon',
            ],
            planets: [
              'Tatooine',
              'Alderaan',
              'Dagobah',
              'Naboo',
              'Coruscant',
              'Utapau',
              'Mustafar',
              'Kashyyyk',
              'Polis Massa',
              'Mygeeto',
              'Felucia',
              'Cato Neimoidia',
              'Saleucami',
            ],
            starships: [
              'CR90 corvette',
              'Droid control ship',
              'Jedi starfighter',
              'Trade Federation cruiser',
              'Theta-class T-2c shuttle',
              'Republic attack cruiser',
              'Naboo star skiff',
              'Jedi Interceptor',
              'arc-170',
              'Banking clan frigte',
              'Belbullab-22 starfighter',
              'V-wing',
            ],
            vehicles: [
              'Vulture Droid',
              'LAAT/i',
              'AT-TE',
              'Neimoidian shuttle',
              'Tsmeu-6 personal wheel bike',
              'Emergency Firespeeder',
              'Droid tri-fighter',
              'Oevvaor jet catamaran',
              'Raddaugh Gnasp fluttercraft',
              'Clone turbo tank',
              'Corporate Alliance tank droid',
              'Droid gunship',
              'AT-RT',
            ],
            species: [
              'Human',
              'Droid',
              'Wookie',
              "Yoda's species",
              "Twi'lek",
              'Toong',
              'Cerean',
              'Tholothian',
              'Iktotchi',
              'Quermian',
              'Kel Dor',
              'Chagrian',
              'Geonosian',
              'Mirialan',
              'Clawdite',
              'Skakoan',
              'Muun',
              'Togruta',
              'Kaleesh',
              "Pau'an",
            ],
            created: '2014-12-20T18:49:38.403000Z',
            edited: '2014-12-20T20:47:52.073000Z',
            url: 'https://swapi.dev/api/films/6/',
          },
        ],
        created: '2014-12-09T13:50:49.641000Z',
        edited: '2014-12-20T20:58:18.411000Z',
        url: 'https://swapi.dev/api/planets/1/',
      },
      films: [
        'A New Hope',
        {
          title: 'The Empire Strikes Back',
          episode_id: 5,
          opening_crawl:
            'It is a dark time for the\r\nRebellion. Although the Death\r\nStar has been destroyed,\r\nImperial troops have driven the\r\nRebel forces from their hidden\r\nbase and pursued them across\r\nthe galaxy.\r\n\r\nEvading the dreaded Imperial\r\nStarfleet, a group of freedom\r\nfighters led by Luke Skywalker\r\nhas established a new secret\r\nbase on the remote ice world\r\nof Hoth.\r\n\r\nThe evil lord Darth Vader,\r\nobsessed with finding young\r\nSkywalker, has dispatched\r\nthousands of remote probes into\r\nthe far reaches of space....',
          director: 'Irvin Kershner',
          producer: 'Gary Kurtz, Rick McCallum',
          release_date: '1980-05-17',
          characters: [
            'Luke Skywalker',
            'C-3PO',
            {
              name: 'R2-D2',
              height: 96,
              mass: 32,
              hair_color: 'n/a',
              skin_color: 'white, blue',
              eye_color: 'red',
              birth_year: '33BBY',
              isMale: false,
              homeworld: 'Naboo',
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              species: ['Droid'],
              vehicles: null,
              starships: null,
              created: '2014-12-10T15:11:50.376000Z',
              edited: '2014-12-20T21:17:50.311000Z',
              url: 'https://swapi.dev/api/people/3/',
            },
            'Darth Vader',
            {
              name: 'Leia Organa',
              height: 150,
              mass: 49,
              hair_color: 'brown',
              skin_color: 'light',
              eye_color: 'brown',
              birth_year: '19BBY',
              isMale: false,
              homeworld: 'Alderaan',
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'Revenge of the Sith',
              ],
              species: null,
              vehicles: ['Imperial Speeder Bike'],
              starships: null,
              created: '2014-12-10T15:20:09.791000Z',
              edited: '2014-12-20T21:17:50.315000Z',
              url: 'https://swapi.dev/api/people/5/',
            },
            {
              name: 'Obi-Wan Kenobi',
              height: 182,
              mass: 77,
              hair_color: 'auburn, white',
              skin_color: 'fair',
              eye_color: 'blue-gray',
              birth_year: '57BBY',
              isMale: true,
              homeworld: 'Stewjon',
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              species: null,
              vehicles: ['Tribubble bongo'],
              starships: [
                'Jedi starfighter',
                'Trade Federation cruiser',
                'Naboo star skiff',
                'Jedi Interceptor',
                'Belbullab-22 starfighter',
              ],
              created: '2014-12-10T16:16:29.192000Z',
              edited: '2014-12-20T21:17:50.325000Z',
              url: 'https://swapi.dev/api/people/10/',
            },
            {
              name: 'Chewbacca',
              height: 228,
              mass: 112,
              hair_color: 'brown',
              skin_color: 'unknown',
              eye_color: 'blue',
              birth_year: '200BBY',
              isMale: true,
              homeworld: 'Kashyyyk',
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'Revenge of the Sith',
              ],
              species: ['Wookie'],
              vehicles: ['AT-ST'],
              starships: ['Millennium Falcon', 'Imperial shuttle'],
              created: '2014-12-10T16:42:45.066000Z',
              edited: '2014-12-20T21:17:50.332000Z',
              url: 'https://swapi.dev/api/people/13/',
            },
            {
              name: 'Han Solo',
              height: 180,
              mass: 80,
              hair_color: 'brown',
              skin_color: 'fair',
              eye_color: 'brown',
              birth_year: '29BBY',
              isMale: true,
              homeworld: 'Corellia',
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              species: null,
              vehicles: null,
              starships: ['Millennium Falcon', 'Imperial shuttle'],
              created: '2014-12-10T16:49:14.582000Z',
              edited: '2014-12-20T21:17:50.334000Z',
              url: 'https://swapi.dev/api/people/14/',
            },
            {
              name: 'Wedge Antilles',
              height: 170,
              mass: 77,
              hair_color: 'brown',
              skin_color: 'fair',
              eye_color: 'hazel',
              birth_year: '21BBY',
              isMale: true,
              homeworld: 'Corellia',
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              species: null,
              vehicles: ['Snowspeeder'],
              starships: ['X-wing'],
              created: '2014-12-12T11:08:06.469000Z',
              edited: '2014-12-20T21:17:50.341000Z',
              url: 'https://swapi.dev/api/people/18/',
            },
            {
              name: 'Yoda',
              height: 66,
              mass: 17,
              hair_color: 'white',
              skin_color: 'green',
              eye_color: 'brown',
              birth_year: '896BBY',
              isMale: true,
              homeworld: 'unknown',
              films: [
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              species: ["Yoda's species"],
              vehicles: null,
              starships: null,
              created: '2014-12-15T12:26:01.042000Z',
              edited: '2014-12-20T21:17:50.345000Z',
              url: 'https://swapi.dev/api/people/20/',
            },
            {
              name: 'Palpatine',
              height: 170,
              mass: 75,
              hair_color: 'grey',
              skin_color: 'pale',
              eye_color: 'yellow',
              birth_year: '82BBY',
              isMale: true,
              homeworld: 'Naboo',
              films: [
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              species: null,
              vehicles: null,
              starships: null,
              created: '2014-12-15T12:48:05.971000Z',
              edited: '2014-12-20T21:17:50.347000Z',
              url: 'https://swapi.dev/api/people/21/',
            },
            {
              name: 'Boba Fett',
              height: 183,
              mass: '78.2',
              hair_color: 'black',
              skin_color: 'fair',
              eye_color: 'brown',
              birth_year: '31.5BBY',
              isMale: true,
              homeworld: 'Kamino',
              films: ['The Empire Strikes Back', 'Return of the Jedi', 'Attack of the Clones'],
              species: null,
              vehicles: null,
              starships: ['Slave 1'],
              created: '2014-12-15T12:49:32.457000Z',
              edited: '2014-12-20T21:17:50.349000Z',
              url: 'https://swapi.dev/api/people/22/',
            },
            {
              name: 'IG-88',
              height: 200,
              mass: 140,
              hair_color: 'none',
              skin_color: 'metal',
              eye_color: 'red',
              birth_year: '15BBY',
              isMale: false,
              homeworld: 'unknown',
              films: ['The Empire Strikes Back'],
              species: ['Droid'],
              vehicles: null,
              starships: null,
              created: '2014-12-15T12:51:10.076000Z',
              edited: '2014-12-20T21:17:50.351000Z',
              url: 'https://swapi.dev/api/people/23/',
            },
            {
              name: 'Bossk',
              height: 190,
              mass: 113,
              hair_color: 'none',
              skin_color: 'green',
              eye_color: 'red',
              birth_year: '53BBY',
              isMale: true,
              homeworld: 'Trandosha',
              films: ['The Empire Strikes Back'],
              species: ['Trandoshan'],
              vehicles: null,
              starships: null,
              created: '2014-12-15T12:53:49.297000Z',
              edited: '2014-12-20T21:17:50.355000Z',
              url: 'https://swapi.dev/api/people/24/',
            },
            {
              name: 'Lando Calrissian',
              height: 177,
              mass: 79,
              hair_color: 'black',
              skin_color: 'dark',
              eye_color: 'brown',
              birth_year: '31BBY',
              isMale: true,
              homeworld: 'Socorro',
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              species: null,
              vehicles: null,
              starships: ['Millennium Falcon'],
              created: '2014-12-15T12:56:32.683000Z',
              edited: '2014-12-20T21:17:50.357000Z',
              url: 'https://swapi.dev/api/people/25/',
            },
            {
              name: 'Lobot',
              height: 175,
              mass: 79,
              hair_color: 'none',
              skin_color: 'light',
              eye_color: 'blue',
              birth_year: '37BBY',
              isMale: true,
              homeworld: 'Bespin',
              films: ['The Empire Strikes Back'],
              species: null,
              vehicles: null,
              starships: null,
              created: '2014-12-15T13:01:57.178000Z',
              edited: '2014-12-20T21:17:50.359000Z',
              url: 'https://swapi.dev/api/people/26/',
            },
          ],
          planets: [
            {
              name: 'Hoth',
              rotation_period: 23,
              orbital_period: 549,
              diameter: 7200,
              climate: 'frozen',
              gravity: '1.1 standard',
              terrain: 'tundra, ice caves, mountain ranges',
              surface_water: 100,
              population: 'unknown',
              residents: null,
              films: ['The Empire Strikes Back'],
              created: '2014-12-10T11:39:13.934000Z',
              edited: '2014-12-20T20:58:18.423000Z',
              url: 'https://swapi.dev/api/planets/4/',
            },
            {
              name: 'Dagobah',
              rotation_period: 23,
              orbital_period: 341,
              diameter: 8900,
              climate: 'murky',
              gravity: 'N/A',
              terrain: 'swamp, jungles',
              surface_water: 8,
              population: 'unknown',
              residents: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi', 'Revenge of the Sith'],
              created: '2014-12-10T11:42:22.590000Z',
              edited: '2014-12-20T20:58:18.425000Z',
              url: 'https://swapi.dev/api/planets/5/',
            },
            {
              name: 'Bespin',
              rotation_period: 12,
              orbital_period: 5110,
              diameter: 118000,
              climate: 'temperate',
              gravity: '1.5 (surface), 1 standard (Cloud City)',
              terrain: 'gas giant',
              surface_water: 0,
              population: 6000000,
              residents: ['Lobot'],
              films: ['The Empire Strikes Back'],
              created: '2014-12-10T11:43:55.240000Z',
              edited: '2014-12-20T20:58:18.427000Z',
              url: 'https://swapi.dev/api/planets/6/',
            },
            {
              name: 'Ord Mantell',
              rotation_period: 26,
              orbital_period: 334,
              diameter: 14050,
              climate: 'temperate',
              gravity: '1 standard',
              terrain: 'plains, seas, mesas',
              surface_water: 10,
              population: 4000000000,
              residents: null,
              films: ['The Empire Strikes Back'],
              created: '2014-12-15T12:23:41.661000Z',
              edited: '2014-12-20T20:58:18.464000Z',
              url: 'https://swapi.dev/api/planets/27/',
            },
          ],
          starships: [
            {
              name: 'Star Destroyer',
              model: 'Imperial I-class Star Destroyer',
              manufacturer: 'Kuat Drive Yards',
              cost_in_credits: 150000000,
              length: '1,600',
              max_atmosphering_speed: 975,
              crew: '47,060',
              passengers: 'n/a',
              cargo_capacity: 36000000,
              consumables: '2 years',
              hyperdrive_rating: '2.0',
              MGLT: 60,
              starship_class: 'Star Destroyer',
              pilots: null,
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-10T15:08:19.848000Z',
              edited: '2014-12-20T21:23:49.870000Z',
              url: 'https://swapi.dev/api/starships/3/',
            },
            {
              name: 'Millennium Falcon',
              model: 'YT-1300 light freighter',
              manufacturer: 'Corellian Engineering Corporation',
              cost_in_credits: 100000,
              length: '34.37',
              max_atmosphering_speed: 1050,
              crew: 4,
              passengers: 6,
              cargo_capacity: 100000,
              consumables: '2 months',
              hyperdrive_rating: '0.5',
              MGLT: 75,
              starship_class: 'Light freighter',
              pilots: ['Chewbacca', 'Han Solo', 'Lando Calrissian', 'Nien Nunb'],
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-10T16:59:45.094000Z',
              edited: '2014-12-20T21:23:49.880000Z',
              url: 'https://swapi.dev/api/starships/10/',
            },
            {
              name: 'Y-wing',
              model: 'BTL Y-wing',
              manufacturer: 'Koensayr Manufacturing',
              cost_in_credits: 134999,
              length: 14,
              max_atmosphering_speed: '1000km',
              crew: 2,
              passengers: 0,
              cargo_capacity: 110,
              consumables: '1 week',
              hyperdrive_rating: '1.0',
              MGLT: 80,
              starship_class: 'assault starfighter',
              pilots: null,
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-12T11:00:39.817000Z',
              edited: '2014-12-20T21:23:49.883000Z',
              url: 'https://swapi.dev/api/starships/11/',
            },
            {
              name: 'X-wing',
              model: 'T-65 X-wing',
              manufacturer: 'Incom Corporation',
              cost_in_credits: 149999,
              length: '12.5',
              max_atmosphering_speed: 1050,
              crew: 1,
              passengers: 0,
              cargo_capacity: 110,
              consumables: '1 week',
              hyperdrive_rating: '1.0',
              MGLT: 100,
              starship_class: 'Starfighter',
              pilots: ['Luke Skywalker', 'Biggs Darklighter', 'Wedge Antilles', 'Jek Tono Porkins'],
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-12T11:19:05.340000Z',
              edited: '2014-12-20T21:23:49.886000Z',
              url: 'https://swapi.dev/api/starships/12/',
            },
            {
              name: 'Executor',
              model: 'Executor-class star dreadnought',
              manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
              cost_in_credits: 1143350000,
              length: 19000,
              max_atmosphering_speed: 'n/a',
              crew: '279,144',
              passengers: 38000,
              cargo_capacity: 250000000,
              consumables: '6 years',
              hyperdrive_rating: '2.0',
              MGLT: 40,
              starship_class: 'Star dreadnought',
              pilots: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T12:31:42.547000Z',
              edited: '2014-12-20T21:23:49.893000Z',
              url: 'https://swapi.dev/api/starships/15/',
            },
            {
              name: 'Rebel transport',
              model: 'GR-75 medium transport',
              manufacturer: 'Gallofree Yards, Inc.',
              cost_in_credits: 'unknown',
              length: 90,
              max_atmosphering_speed: 650,
              crew: 6,
              passengers: 90,
              cargo_capacity: 19000000,
              consumables: '6 months',
              hyperdrive_rating: '4.0',
              MGLT: 20,
              starship_class: 'Medium transport',
              pilots: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T12:34:52.264000Z',
              edited: '2014-12-20T21:23:49.895000Z',
              url: 'https://swapi.dev/api/starships/17/',
            },
            {
              name: 'Slave 1',
              model: 'Firespray-31-class patrol and attack',
              manufacturer: 'Kuat Systems Engineering',
              cost_in_credits: 'unknown',
              length: '21.5',
              max_atmosphering_speed: 1000,
              crew: 1,
              passengers: 6,
              cargo_capacity: 70000,
              consumables: '1 month',
              hyperdrive_rating: '3.0',
              MGLT: 70,
              starship_class: 'Patrol craft',
              pilots: ['Boba Fett'],
              films: ['The Empire Strikes Back', 'Attack of the Clones'],
              created: '2014-12-15T13:00:56.332000Z',
              edited: '2014-12-20T21:23:49.897000Z',
              url: 'https://swapi.dev/api/starships/21/',
            },
            {
              name: 'Imperial shuttle',
              model: 'Lambda-class T-4a shuttle',
              manufacturer: 'Sienar Fleet Systems',
              cost_in_credits: 240000,
              length: 20,
              max_atmosphering_speed: 850,
              crew: 6,
              passengers: 20,
              cargo_capacity: 80000,
              consumables: '2 months',
              hyperdrive_rating: '1.0',
              MGLT: 50,
              starship_class: 'Armed government transport',
              pilots: ['Luke Skywalker', 'Chewbacca', 'Han Solo'],
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T13:04:47.235000Z',
              edited: '2014-12-20T21:23:49.900000Z',
              url: 'https://swapi.dev/api/starships/22/',
            },
            {
              name: 'EF76 Nebulon-B escort frigate',
              model: 'EF76 Nebulon-B escort frigate',
              manufacturer: 'Kuat Drive Yards',
              cost_in_credits: 8500000,
              length: 300,
              max_atmosphering_speed: 800,
              crew: 854,
              passengers: 75,
              cargo_capacity: 6000000,
              consumables: '2 years',
              hyperdrive_rating: '2.0',
              MGLT: 40,
              starship_class: 'Escort ship',
              pilots: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T13:06:30.813000Z',
              edited: '2014-12-20T21:23:49.902000Z',
              url: 'https://swapi.dev/api/starships/23/',
            },
          ],
          vehicles: [
            {
              name: 'TIE/LN starfighter',
              model: 'Twin Ion Engine/Ln Starfighter',
              manufacturer: 'Sienar Fleet Systems',
              cost_in_credits: 'unknown',
              length: '6.4',
              max_atmosphering_speed: 1200,
              crew: 1,
              passengers: 0,
              cargo_capacity: 65,
              consumables: '2 days',
              vehicle_class: 'starfighter',
              pilots: null,
              films: ['A New Hope', 'The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-10T16:33:52.860000Z',
              edited: '2014-12-20T21:30:21.670000Z',
              url: 'https://swapi.dev/api/vehicles/8/',
            },
            {
              name: 'Snowspeeder',
              model: 't-47 airspeeder',
              manufacturer: 'Incom corporation',
              cost_in_credits: 'unknown',
              length: '4.5',
              max_atmosphering_speed: 650,
              crew: 2,
              passengers: 0,
              cargo_capacity: 10,
              consumables: 'none',
              vehicle_class: 'airspeeder',
              pilots: ['Luke Skywalker', 'Wedge Antilles'],
              films: ['The Empire Strikes Back'],
              created: '2014-12-15T12:22:12Z',
              edited: '2014-12-20T21:30:21.672000Z',
              url: 'https://swapi.dev/api/vehicles/14/',
            },
            {
              name: 'TIE bomber',
              model: 'TIE/sa bomber',
              manufacturer: 'Sienar Fleet Systems',
              cost_in_credits: 'unknown',
              length: '7.8',
              max_atmosphering_speed: 850,
              crew: 1,
              passengers: 0,
              cargo_capacity: 'none',
              consumables: '2 days',
              vehicle_class: 'space/planetary bomber',
              pilots: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T12:33:15.838000Z',
              edited: '2014-12-20T21:30:21.675000Z',
              url: 'https://swapi.dev/api/vehicles/16/',
            },
            {
              name: 'AT-AT',
              model: 'All Terrain Armored Transport',
              manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
              cost_in_credits: 'unknown',
              length: 20,
              max_atmosphering_speed: 60,
              crew: 5,
              passengers: 40,
              cargo_capacity: 1000,
              consumables: 'unknown',
              vehicle_class: 'assault walker',
              pilots: null,
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T12:38:25.937000Z',
              edited: '2014-12-20T21:30:21.677000Z',
              url: 'https://swapi.dev/api/vehicles/18/',
            },
            {
              name: 'AT-ST',
              model: 'All Terrain Scout Transport',
              manufacturer: 'Kuat Drive Yards, Imperial Department of Military Research',
              cost_in_credits: 'unknown',
              length: 2,
              max_atmosphering_speed: 90,
              crew: 2,
              passengers: 0,
              cargo_capacity: 200,
              consumables: 'none',
              vehicle_class: 'walker',
              pilots: ['Chewbacca'],
              films: ['The Empire Strikes Back', 'Return of the Jedi'],
              created: '2014-12-15T12:46:42.384000Z',
              edited: '2014-12-20T21:30:21.679000Z',
              url: 'https://swapi.dev/api/vehicles/19/',
            },
            {
              name: 'Storm IV Twin-Pod cloud car',
              model: 'Storm IV Twin-Pod',
              manufacturer: 'Bespin Motors',
              cost_in_credits: 75000,
              length: 7,
              max_atmosphering_speed: 1500,
              crew: 2,
              passengers: 0,
              cargo_capacity: 10,
              consumables: '1 day',
              vehicle_class: 'repulsorcraft',
              pilots: null,
              films: ['The Empire Strikes Back'],
              created: '2014-12-15T12:58:50.530000Z',
              edited: '2014-12-20T21:30:21.681000Z',
              url: 'https://swapi.dev/api/vehicles/20/',
            },
          ],
          species: [
            {
              name: 'Human',
              classification: 'mammal',
              designation: 'sentient',
              average_height: 180,
              skin_colors: 'caucasian, black, asian, hispanic',
              hair_colors: 'blonde, brown, black, red',
              eye_colors: 'brown, blue, green, hazel, grey, amber',
              average_lifespan: 120,
              homeworld: 'Coruscant',
              language: 'Galactic Basic',
              people: ['Dormé', 'Dooku', 'Bail Prestor Organa', 'Jocasta Nu'],
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              created: '2014-12-10T13:52:11.567000Z',
              edited: '2014-12-20T21:36:42.136000Z',
              url: 'https://swapi.dev/api/species/1/',
            },
            {
              name: 'Droid',
              classification: 'artificial',
              designation: 'sentient',
              average_height: 'n/a',
              skin_colors: 'n/a',
              hair_colors: 'n/a',
              eye_colors: 'n/a',
              average_lifespan: 'indefinite',
              homeworld: null,
              language: 'n/a',
              people: ['C-3PO', 'R2-D2', 'R5-D4', 'IG-88'],
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              created: '2014-12-10T15:16:16.259000Z',
              edited: '2014-12-20T21:36:42.139000Z',
              url: 'https://swapi.dev/api/species/2/',
            },
            {
              name: 'Wookie',
              classification: 'mammal',
              designation: 'sentient',
              average_height: 210,
              skin_colors: 'gray',
              hair_colors: 'black, brown',
              eye_colors: 'blue, green, yellow, brown, golden, red',
              average_lifespan: 400,
              homeworld: 'Kashyyyk',
              language: 'Shyriiwook',
              people: ['Chewbacca', 'Tarfful'],
              films: [
                'A New Hope',
                'The Empire Strikes Back',
                'Return of the Jedi',
                'Revenge of the Sith',
              ],
              created: '2014-12-10T16:44:31.486000Z',
              edited: '2014-12-20T21:36:42.142000Z',
              url: 'https://swapi.dev/api/species/3/',
            },
            {
              name: "Yoda's species",
              classification: 'mammal',
              designation: 'sentient',
              average_height: 66,
              skin_colors: 'green, yellow',
              hair_colors: 'brown, white',
              eye_colors: 'brown, green, yellow',
              average_lifespan: 900,
              homeworld: 'unknown',
              language: 'Galactic basic',
              people: ['Yoda'],
              films: [
                'The Empire Strikes Back',
                'Return of the Jedi',
                'The Phantom Menace',
                'Attack of the Clones',
                'Revenge of the Sith',
              ],
              created: '2014-12-15T12:27:22.877000Z',
              edited: '2014-12-20T21:36:42.148000Z',
              url: 'https://swapi.dev/api/species/6/',
            },
            {
              name: 'Trandoshan',
              classification: 'reptile',
              designation: 'sentient',
              average_height: 200,
              skin_colors: 'brown, green',
              hair_colors: 'none',
              eye_colors: 'yellow, orange',
              average_lifespan: 'unknown',
              homeworld: 'Trandosha',
              language: 'Dosh',
              people: ['Bossk'],
              films: ['The Empire Strikes Back'],
              created: '2014-12-15T13:07:47.704000Z',
              edited: '2014-12-20T21:36:42.151000Z',
              url: 'https://swapi.dev/api/species/7/',
            },
          ],
          created: '2014-12-12T11:26:24.656000Z',
          edited: '2014-12-15T13:07:53.386000Z',
          url: 'https://swapi.dev/api/films/2/',
        },
        'Return of the Jedi',
        'Revenge of the Sith',
      ],
      species: null,
      vehicles: [
        'Snowspeeder',
        {
          name: 'Imperial Speeder Bike',
          model: '74-Z speeder bike',
          manufacturer: 'Aratech Repulsor Company',
          cost_in_credits: 8000,
          length: 3,
          max_atmosphering_speed: 360,
          crew: 1,
          passengers: 1,
          cargo_capacity: 4,
          consumables: '1 day',
          vehicle_class: 'speeder',
          pilots: ['Luke Skywalker', 'Leia Organa'],
          films: ['Return of the Jedi'],
          created: '2014-12-18T11:20:04.625000Z',
          edited: '2014-12-20T21:30:21.693000Z',
          url: 'https://swapi.dev/api/vehicles/30/',
        },
      ],
      starships: ['X-wing', 'Imperial shuttle'],
      created: '2014-12-09T13:50:51.644000Z',
      edited: '2014-12-20T21:17:56.891000Z',
      url: 'https://swapi.dev/api/people/1/',
    },
  },
  jsonPlaceholder: {
    name: '👥 Client list',
    description: (
      <Flex flexDir="column" gap={2}>
        <Text>
          An array of user data, taken from{' '}
          <Link href="https://jsonplaceholder.typicode.com/users" isExternal>
            <strong>https://jsonplaceholder.typicode.com/users</strong>
          </Link>
          .
        </Text>
        <Text>
          You'll note that the <span className="code">id</span> field is not editable, which would
          be important if this saved back to a database. An additional{' '}
          <span className="code">restrictEdit</span> function as been included which targets the{' '}
          <span className="code">id</span> field specifically.
        </Text>
        <Text>
          Also, notice that when a new item is added at the top level, a correctly structured{' '}
          <strong>Person</strong> object is added, but adding new items elsewhere adds simple string
          values. This is done by specifying a function for the{' '}
          <span className="code">defaultValue</span> prop.
        </Text>
      </Flex>
    ),
    restrictEdit: ({ key, level }) => key === 'id' || level === 0 || level === 1,
    restrictDelete: ({ key }) => key === 'id',
    collapse: 2,
    defaultValue: ({ level }) => {
      if (level === 0)
        return {
          id: Math.floor(Math.random() * 1000) + 10,
          name: 'New User',
          username: 'user',
          email: 'info@test.com',
          address: {
            street: '',
            suite: '',
            city: '',
            zipcode: '',
            geo: {
              lat: 0,
              lng: 0,
            },
          },
          phone: '1234',
          website: '',
          company: {
            name: '',
            catchPhrase: '',
            bs: '',
          },
        }
      return 'New Value'
    },
    data: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          street: 'Kulas Light',
          suite: 'Apt. 556',
          city: 'Gwenborough',
          zipcode: '92998-3874',
          geo: {
            lat: -37.3159,
            lng: 81.1496,
          },
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
          name: 'Romaguera-Crona',
          catchPhrase: 'Multi-layered client-server neural-net',
          bs: 'harness real-time e-markets',
        },
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: {
          street: 'Victor Plains',
          suite: 'Suite 879',
          city: 'Wisokyburgh',
          zipcode: '90566-7771',
          geo: {
            lat: -43.9509,
            lng: -34.4618,
          },
        },
        phone: '010-692-6593 x09125',
        website: 'anastasia.net',
        company: {
          name: 'Deckow-Crist',
          catchPhrase: 'Proactive didactic contingency',
          bs: 'synergize scalable supply-chains',
        },
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: {
          street: 'Douglas Extension',
          suite: 'Suite 847',
          city: 'McKenziehaven',
          zipcode: '59590-4157',
          geo: {
            lat: -68.6102,
            lng: -47.0653,
          },
        },
        phone: '1-463-123-4447',
        website: 'ramiro.info',
        company: {
          name: 'Romaguera-Jacobson',
          catchPhrase: 'Face to face bifurcated interface',
          bs: 'e-enable strategic applications',
        },
      },
      {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        address: {
          street: 'Hoeger Mall',
          suite: 'Apt. 692',
          city: 'South Elvis',
          zipcode: '53919-4257',
          geo: {
            lat: 29.4572,
            lng: -164.299,
          },
        },
        phone: '493-170-9623 x156',
        website: 'kale.biz',
        company: {
          name: 'Robel-Corkery',
          catchPhrase: 'Multi-tiered zero tolerance productivity',
          bs: 'transition cutting-edge web services',
        },
      },
      {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        address: {
          street: 'Skiles Walks',
          suite: 'Suite 351',
          city: 'Roscoeview',
          zipcode: '33263',
          geo: {
            lat: -31.8129,
            lng: 62.5342,
          },
        },
        phone: '(254)954-1289',
        website: 'demarco.info',
        company: {
          name: 'Keebler LLC',
          catchPhrase: 'User-centric fault-tolerant solution',
          bs: 'revolutionize end-to-end systems',
        },
      },
      {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        address: {
          street: 'Norberto Crossing',
          suite: 'Apt. 950',
          city: 'South Christy',
          zipcode: '23505-1337',
          geo: {
            lat: -71.4197,
            lng: 71.7478,
          },
        },
        phone: '1-477-935-8478 x6430',
        website: 'ola.org',
        company: {
          name: 'Considine-Lockman',
          catchPhrase: 'Synchronised bottom-line interface',
          bs: 'e-enable innovative applications',
        },
      },
      {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        address: {
          street: 'Rex Trail',
          suite: 'Suite 280',
          city: 'Howemouth',
          zipcode: '58804-1099',
          geo: {
            lat: 24.8918,
            lng: 21.8984,
          },
        },
        phone: '210.067.6132',
        website: 'elvis.io',
        company: {
          name: 'Johns Group',
          catchPhrase: 'Configurable multimedia task-force',
          bs: 'generate enterprise e-tailers',
        },
      },
      {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        address: {
          street: 'Ellsworth Summit',
          suite: 'Suite 729',
          city: 'Aliyaview',
          zipcode: '45169',
          geo: {
            lat: -14.399,
            lng: -120.7677,
          },
        },
        phone: '586.493.6943 x140',
        website: 'jacynthe.com',
        company: {
          name: 'Abernathy Group',
          catchPhrase: 'Implemented secondary concept',
          bs: 'e-enable extensible e-tailers',
        },
      },
      {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        address: {
          street: 'Dayna Park',
          suite: 'Suite 449',
          city: 'Bartholomebury',
          zipcode: '76495-3109',
          geo: {
            lat: 24.6463,
            lng: -168.8889,
          },
        },
        phone: '(775)976-6794 x41206',
        website: 'conrad.com',
        company: {
          name: 'Yost and Sons',
          catchPhrase: 'Switchable contextually-based project',
          bs: 'aggregate real-time technologies',
        },
      },
      {
        id: 10,
        name: 'Clementina DuBuque',
        username: 'Moriah.Stanton',
        email: 'Rey.Padberg@karina.biz',
        address: {
          street: 'Kattie Turnpike',
          suite: 'Suite 198',
          city: 'Lebsackbury',
          zipcode: '31428-2261',
          geo: {
            lat: -38.2386,
            lng: 57.2232,
          },
        },
        phone: '024-648-3804',
        website: 'ambrose.net',
        company: {
          name: 'Hoeger LLC',
          catchPhrase: 'Centralized empowering task-force',
          bs: 'target end-to-end models',
        },
      },
    ],
  },
  vsCode: {
    name: '⚙️ VSCode settings file',
    description: (
      <Text>
        A typical{' '}
        <Link href="https://code.visualstudio.com/" isExternal>
          VSCode
        </Link>{' '}
        config file.
      </Text>
    ),
    collapse: 2,
    data: {
      'editor.codeActionsOnSave': {
        'source.fixAll.eslint': true,
        'source.fixAll.tslint': true,
      },
      'editor.defaultFormatter': 'esbenp.prettier-vscode',
      'eslint.workingDirectories': [{ mode: 'auto' }],
      'eslint.options': {
        rules: {
          'import/default': 'error',
          'import/export': 'error',
          'import/named': 'error',
          'import/namespace': 'error',
          'import/no-duplicates': 'error',
          'import/no-named-as-default': 'error',
          'import/no-named-as-default-member': 'error',
          'import/no-unresolved': 'error',
        },
      },
      'javascript.format.enable': false,
      'window.zoomLevel': 3,
      'editor.tabSize': 2,
      'typescript.format.insertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis': true,
      'editor.formatOnSave': true,
    },
  },
  liveData: {
    name: '📖 Live Data (from database)',
    description: (
      <Text>
        Let's try a little experiment. You can save this JSON object to a live database, so feel
        free to use it to leave the world a message or find some way to be creative.
        <br />
        Note the deletion restriction and the restriction on being able to modify a whole object
        node. Let's see how long it lasts... 😉
      </Text>
    ),
    rootName: 'liveData',
    collapse: 3,
    restrictEdit: ({ key, value, level, path, size }) => {
      return level === 0 || key === 'messages' || key === 'lastEdited'
    },
    restrictDelete: () => true,
    restrictAdd: ({ level }) => level === 0,
    data: {},
  },
  editTheme: {
    name: '🎨 Edit this theme!',
    description: (
      <Flex flexDir="column" gap={2}>
        <Text>
          You are now viewing the <strong>Theme</strong> object being used by the component right
          now — edit it live!
        </Text>
        <Text>
          Notice you are restricted from changing the structure in a way that would break the
          required schema.
        </Text>
        <Text>
          See{' '}
          <Link href="https://github.com/CarlosNZ/json-edit-react#themes--styles" isExternal>
            here
          </Link>{' '}
          for theming information.
        </Text>
      </Flex>
    ),
    rootName: 'theme',
    restrictEdit: ({ key, level }) => level === 0 || ['fragments', 'styles'].includes(key),
    restrictDelete: ({ key }) => ['displayName', 'fragments', 'styles'].includes(key),
    restrictAdd: ({ level }) => level === 0,
    restrictTypeSelection: ['string', 'object', 'array'],
    collapse: 2,
    data: {},
  },
  customNodes: {
    name: '🔧 Custom Nodes',
    description: (
      <Flex flexDir="column" gap={2}>
        <Text>
          This data set demonstrates <strong>Custom Nodes</strong> — you can provide your own
          components to present specialised data in a unique way, or provide a more complex editing
          mechanism for a specialised data structure, say.
        </Text>
        <Text>
          In this example, compare the raw JSON (edit the data root) with what is presented here.
        </Text>
        <Text>
          You can also see how the property count text changes depending on the data. This is using
          dynamic{' '}
          <Link href="https://github.com/CarlosNZ/json-edit-react#custom-text" isExternal>
            Custom Text
          </Link>{' '}
          definitions.
        </Text>
        <Text>
          We are also using a conditional{' '}
          <Link href="https://github.com/CarlosNZ/json-edit-react#themes--styles" isExternal>
            Theme function
          </Link>{' '}
          for the character name (bolder and larger than other strings).
        </Text>
      </Flex>
    ),
    rootName: 'Superheroes',
    collapse: 2,
    data: [
      {
        name: 'Steve Rogers',
        dateOfBirth: '1920-07-04T12:00:00-05:00',
        aliases: ['Captain America', 'The First Avenger'],
        logo: 'https://logos-world.net/wp-content/uploads/2023/05/Captain-America-Logo.png',
        portrayedBy: ['Chris Evans'],
        publisher: 'Marvel',
      },
      {
        name: 'Peter Parker',
        dateOfBirth: '2001-08-09T16:30:00.000Z',
        aliases: ['Spiderman'],
        logo: 'https://logos-world.net/wp-content/uploads/2020/11/Spider-Man-Logo.png',
        portrayedBy: ['Tobey Maguire', 'Andrew Garfield', 'Tom Holland'],
        publisher: 'Marvel',
      },
      {
        name: 'Clark Kent',
        dateOfBirth: '1977-04-14T12:00:00-06:00',
        aliases: ['Superman', 'Man of Steel', 'Son of Krypton'],
        logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/2560px-Superman_shield.svg.png',
        portrayedBy: ['Christopher Reeve', 'Brandon Routh', 'Henry Cavill'],
        publisher: 'D.C. Comics',
      },
      {
        name: 'Bruce Wayne',
        dateOfBirth: '1970-02-18T18:00:00.000Z',
        aliases: ['Batman', 'The Dark Knight', 'The Caped Crusader'],
        logo: 'https://logos-world.net/wp-content/uploads/2020/12/Batman-Logo.png',
        portrayedBy: [
          'Michael Keaton',
          'George Clooney',
          'Val Kilmer',
          'Christian Bale',
          'Ben Affleck',
          'Robert Pattinson',
        ],
        publisher: 'D.C. Comics',
      },
    ],
    customNodeDefinitions: [
      {
        condition: ({ key, value }) =>
          key === 'logo' &&
          typeof value === 'string' &&
          value.startsWith('http') &&
          value.endsWith('.png'),
        element: ({ data }) => {
          const truncate = (string: string, length = 50) =>
            string.length < length ? string : `${string.slice(0, length - 2).trim()}...`
          return (
            <div style={{ maxWidth: 250 }}>
              <a href={data} target="_blank">
                <img src={data} style={{ maxHeight: 75 }} />
                <p style={{ fontSize: '0.75em' }}>{truncate(data as string)}</p>{' '}
              </a>
            </div>
          )
        },
      },
      {
        condition: ({ key }) => key === 'publisher',
        element: ({ data }) => {
          return (
            <p
              style={{
                padding: '0.5em 1em',
                border: '2px solid red',
                borderRadius: '1.5em',
                backgroundColor: 'yellow',
                marginTop: '0.5em',
                marginRight: '1em',
                fontFamily: 'sans-serif',
                color: 'black',
              }}
            >
              Presented by: <strong>{String(data)}</strong>
            </p>
          )
        },
        hideKey: true,
      },
      {
        ...dateNodeDefinition,
        showOnView: true,
        showInTypesSelector: true,
        customNodeProps: { showTimeSelect: false, dateFormat: 'MMM d, yyyy' },
      },
    ],
    customTextDefinitions: {
      ITEM_SINGLE: ({ key, value, size }) => {
        if (value instanceof Object && 'name' in value)
          return `${value.name} (${(value as any)?.publisher ?? ''})`
        if (key === 'aliases' && Array.isArray(value))
          return `${size} ${size === 1 ? 'name' : 'names'}`
        return null
      },
      ITEMS_MULTIPLE: ({ key, value, size }) => {
        if (value instanceof Object && 'name' in value)
          return `${value.name} (${(value as any)?.publisher ?? ''})`
        if (key === 'aliases' && Array.isArray(value))
          return `${size} ${size === 1 ? 'name' : 'names'}`
        return null
      },
    },
    styles: {
      string: ({ key }) => (key === 'name' ? { fontWeight: 'bold', fontSize: '120%' } : null),
    },
  },
  // Enable to test more complex features of Custom nodes
  // testCustomNodes: {
  //   name: '🔧 Custom Nodes',
  //   description: (
  //     <Flex flexDir="column" gap={2}>
  //       <Text>
  //         This data set shows <strong>Custom Nodes</strong> — you can provide your own components to
  //         present specialised data in a unique way, or provide a more complex editing mechanism for
  //         a specialised data structure, say.
  //       </Text>
  //       <Text>
  //         In this example, compare the raw JSON (edit the data root) with what is presented here.
  //       </Text>
  //       <Text>
  //         See the{' '}
  //         <a href="https://github.com/CarlosNZ/json-edit-react#custom-nodes">Custom Nodes</a>{' '}
  //         section of the documentation for more info.
  //       </Text>
  //     </Flex>
  //   ),
  //   rootName: 'Superheroes',
  //   collapse: 2,
  //   data: [
  //     {
  //       name: 'Steve Rogers',
  //       aliases: ['Captain America', 'The First Avenger'],
  //       logo: 'https://logos-world.net/wp-content/uploads/2023/05/Captain-America-Logo.png',
  //       actor: 'Chris Evans',
  //       publisher: 'Marvel',
  //     },
  //     {
  //       name: 'Clark Kent',
  //       aliases: ['Superman', 'Man of Steel', 'Son of Krypton'],
  //       logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Superman_shield.svg/2560px-Superman_shield.svg.png',
  //       actor: 'Henry Cavill',
  //       publisher: 'D.C. Comics',
  //     },
  //   ],
  //   customNodeDefinitions: [
  //     {
  //       condition: ({ key, value }) =>
  //         key === 'logo' &&
  //         typeof value === 'string' &&
  //         value.startsWith('http') &&
  //         value.endsWith('.png'),
  //       element: ({ data }) => {
  //         const truncate = (string: string, length = 50) =>
  //           string.length < length ? string : `${string.slice(0, length - 2).trim()}...`
  //         return (
  //           <div style={{ maxWidth: 250 }}>
  //             <a href={data} target="_blank">
  //               <img src={data} style={{ maxHeight: 75 }} />
  //               <p style={{ fontSize: '0.75em' }}>{truncate(data)}</p>{' '}
  //             </a>
  //           </div>
  //         )
  //       },
  //     },
  //     {
  //       condition: ({ key }) => key === 'publisher',
  //       element: ({ data }) => {
  //         return (
  //           <p
  //             style={{
  //               padding: '0.5em 1em',
  //               border: '2px solid red',
  //               borderRadius: '1.5em',
  //               backgroundColor: 'yellow',
  //               marginTop: '0.5em',
  //               marginRight: '1em',
  //               fontFamily: 'sans-serif',
  //             }}
  //           >
  //             Presented by: <strong>{data}</strong>
  //           </p>
  //         )
  //       },
  //       hideKey: true,
  //       showEditTools: false,
  //     },
  //     {
  //       condition: ({ key }) => key === 'aliases',
  //       element: ({ data }) => {
  //         return (
  //           <ol style={{ paddingLeft: 50, color: 'orange' }}>
  //             {data.map((val) => (
  //               <li key={val}>{val}</li>
  //             ))}
  //           </ol>
  //         )
  //       },
  //       // showOnEdit: true,
  //       // showOnView: false,
  //       // hideKey: true,
  //     },
  //   ],
  // },
}

export default data
