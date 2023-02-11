// var allLeaders = []
// var colMapping = ['date', 'leader', 'state']
// var months = ["January","February","March","April","May","June","July","August","September","October","November","December"]

// $('table.wikitable.sortable tbody').each(
//     (yearIndex, yearElement) => {

//         $('tr', $(yearElement)).each(
//             (_, rowElement) => {
//                 var record = {};
//                 var colModifier = 0;

//                 $('td', $(rowElement)).each(
//                     (colIndex, colElement) => {
//                         if (colIndex + colModifier <= 2) {
//                             var cellText = $(colElement).text()
//                                 .replace(/ *\([^)]*\) */g, "")
//                                 .replace(/ *\[[^)]*\] */g, "")
//                                 .replace(/ *\<[^)]*\> */g, "")
//                                 .replace('\n', "")
//                                 .trim();

//                             if (colIndex === 0) {
//                                 var hasMonth = false;
//                                 months.forEach(month => {
//                                     if (cellText.indexOf(month) !== -1) {
//                                         hasMonth = true;
//                                     }
//                                 });
//                                 if (!hasMonth) {
//                                     colModifier = 1;
//                                     record.date = lastDate;
//                                 }
//                             }

//                             if (colIndex + colModifier === 0 && (yearIndex >= 5)) {
//                                 cellText += ` ${2015 + yearIndex}`
//                             }

//                             record[colMapping[colIndex + colModifier]] = cellText;

//                             if (colIndex + colModifier === 0) {
//                                 lastDate = cellText;
//                             }
//                         }
//                     }
//                 )

//                 allLeaders.push(record);
//             }
//         )
//     }
// )

var leaders = [
    {
       "date":"5 October 1967",
       "leader":"Hassanal Bolkiah",
       "state":"Brunei"
    },
    {
       "date":"14 January 1972",
       "leader":"Margrethe II",
       "state":"Denmark"
    },
    {
       "date":"15 September 1973",
       "leader":"Carl XVI Gustaf",
       "state":"Sweden"
    },
    {
       "date":"30 June 1975",
       "leader":"Paul Biya",
       "state":"Cameroon"
    },
    {
       "date":"3 August 1979",
       "leader":"Teodoro Obiang Nguema Mbasogo",
       "state":"Equatorial Guinea"
    },
    {
       "date":"13 October 1981",
       "leader":"Ali Khamenei",
       "state":"Iran"
    },
    {
       "date":"26 August 1984",
       "leader":"Hans-Adam II",
       "state":"Liechtenstein"
    },
    {
       "date":"26 December 1984",
       "leader":"Hun Sen",
       "state":"Cambodia"
    },
    {
       "date":"29 January 1986",
       "leader":"Yoweri Museveni",
       "state":"Uganda"
    },
    {
       "date":"25 April 1986",
       "leader":"Mswati III",
       "state":"Eswatini"
    },
    {
       "date":"1 June 1990",
       "leader":"Harald V",
       "state":"Norway"
    },
    {
       "date":"27 April 1991",
       "leader":"Isaias Afwerki",
       "state":"Eritrea"
    },
    {
       "date":"19 November 1992",
       "leader":"Emomali Rahmon",
       "state":"Tajikistan"
    },
    {
       "date":"20 July 1994",
       "leader":"Alexander Lukashenko",
       "state":"Belarus"
    },
    {
       "date":"7 February 1996",
       "leader":"Letsie III",
       "state":"Lesotho"
    },
    {
       "date":"25 October 1997",
       "leader":"Denis Sassou Nguesso",
       "state":"Congo-Brazzaville"
    },
    {
       "date":"3 March 1998",
       "leader":"Henri",
       "state":"Luxembourg"
    },
    {
       "date":"25 January 1999",
       "leader":"Abdullah II",
       "state":"Jordan"
    },
    {
       "date":"6 March 1999",
       "leader":"Hamad bin Isa Al Khalifa",
       "state":"Bahrain"
    },
    {
       "date":"8 May 1999",
       "leader":"Ismaïl Omar Guelleh",
       "state":"Djibouti"
    },
    {
       "date":"23 July 1999",
       "leader":"Mohammed VI",
       "state":"Morocco"
    },
    {
       "date":"9 August 1999",
       "leader":"Vladimir Putin",
       "state":"Russia"
    },
    {
       "date":"22 April 2000",
       "leader":"Paul Kagame",
       "state":"Rwanda"
    },
    {
       "date":"17 July 2000",
       "leader":"Bashar al-Assad",
       "state":"Syria"
    },
    {
       "date":"29 March 2001",
       "leader":"Ralph Gonsalves",
       "state":"Saint Vincent and the Grenadines"
    },
    {
       "date":"14 March 2003",
       "leader":"Recep Tayyip Erdoğan",
       "state":"Turkey"
    },
    {
       "date":"12 May 2003",
       "leader":"Joan Enric Vives i Sicília",
       "state":"Andorra"
    },
    {
       "date":"4 August 2003",
       "leader":"Ilham Aliyev",
       "state":"Azerbaijan"
    },
    {
       "date":"12 December 2003",
       "leader":"Shavkat Mirziyoyev",
       "state":"Uzbekistan"
    },
    {
       "date":"8 January 2004",
       "leader":"Roosevelt Skerrit",
       "state":"Dominica"
    },
    {
       "date":"12 August 2004",
       "leader":"Lee Hsien Loong",
       "state":"Singapore"
    },
    {
       "date":"15 August 2004",
       "leader":"Alois",
       "state":"Liechtenstein"
    },
    {
       "date":"14 October 2004",
       "leader":"Norodom Sihamoni",
       "state":"Cambodia"
    },
    {
       "date":"15 January 2005",
       "leader":"Mahmoud Abbas",
       "state":"Palestine"
    },
    {
       "date":"31 March 2005",
       "leader":"Albert II",
       "state":"Monaco"
    },
    {
       "date":"4 May 2005",
       "leader":"Faure Gnassingbé",
       "state":"Togo"
    },
    {
       "date":"30 July 2005",
       "leader":"Salva Kiir Mayardit",
       "state":"South Sudan"
    },
    {
       "date":"11 February 2006",
       "leader":"Mohammed bin Rashid Al Maktoum",
       "state":"United Arab Emirates"
    },
    {
       "date":"9 December 2006",
       "leader":"Jigme Khesar Namgyel Wangchuck",
       "state":"Bhutan"
    },
    {
       "date":"21 December 2006",
       "leader":"Gurbanguly Berdimuhamedow",
       "state":"Turkmenistan"
    },
    {
       "date":"10 January 2007",
       "leader":"Daniel Ortega",
       "state":"Nicaragua"
    },
    {
       "date":"6 January 2009",
       "leader":"Sheikh Hasina",
       "state":"Bangladesh"
    },
    {
       "date":"26 February 2009",
       "leader":"Patrick Allen",
       "state":"Jamaica"
    },
    {
       "date":"16 October 2009",
       "leader":"Ali Bongo Ondimba",
       "state":"Gabon"
    },
    {
       "date":"29 May 2010",
       "leader":"Viktor Orbán",
       "state":"Hungary"
    },
    {
       "date":"14 October 2010",
       "leader":"Mark Rutte",
       "state":"Netherlands"
    },
    {
       "date":"4 December 2010",
       "leader":"Alassane Ouattara",
       "state":"Ivory Coast"
    },
    {
       "date":"19 January 2011",
       "leader":"Nguyễn Phú Trọng",
       "state":"Vietnam"
    },
    {
       "date":"11 November 2011",
       "leader":"Michael D. Higgins",
       "state":"Ireland"
    },
    {
       "date":"17 December 2011",
       "leader":"Kim Jong-un",
       "state":"North Korea"
    },
    {
       "date":"1 January 2012",
       "leader":"Alain Berset",
       "state":"Switzerland"
    },
    {
       "date":"1 March 2012",
       "leader":"Sauli Niinistö",
       "state":"Finland"
    },
    {
       "date":"18 March 2012",
       "leader":"Tupou VI",
       "state":"Tonga"
    },
    {
       "date":"2 April 2012",
       "leader":"Macky Sall",
       "state":"Senegal"
    },
    {
       "date":"20 July 2012",
       "leader":"Josep Maria Mauri",
       "state":"Andorra"
    },
    {
       "date":"15 November 2012",
       "leader":"Xi Jinping",
       "state":"China"
    },
    {
       "date":"4 December 2012",
       "leader":"Hage Geingob",
       "state":"Namibia"
    },
    {
       "date":"28 February 2013",
       "leader":"Nicos Anastasiades",
       "state":"Cyprus"
    },
    {
       "date":"5 March 2013",
       "leader":"Nicolás Maduro",
       "state":"Venezuela"
    },
    {
       "date":"8 March 2013",
       "leader":"Miloš Zeman",
       "state":"Czech Republic"
    },
    {
       "date":"13 March 2013",
       "leader":"Pope Francis",
       "state":"Vatican City"
    },
    {
       "date":"14 March 2013",
       "leader":"Abdul Hamid",
       "state":"Bangladesh"
    },
    {
       "date":"15 March 2013",
       "leader":"Li Keqiang",
       "state":"China"
    },
    {
       "date":"1 April 2013",
       "leader":"Abdoulkader Kamil Mohamed",
       "state":"Djibouti"
    },
    {
       "date":"30 April 2013",
       "leader":"Willem-Alexander",
       "state":"Netherlands"
    },
    {
       "date":"7 May 2013",
       "leader":"Cécile La Grenade",
       "state":"Grenada"
    },
    {
       "date":"25 June 2013",
       "leader":"Tamim bin Hamad Al Thani",
       "state":"Qatar"
    },
    {
       "date":"21 July 2013",
       "leader":"Philippe",
       "state":"Belgium"
    },
    {
       "date":"15 September 2013",
       "leader":"Edi Rama",
       "state":"Albania"
    },
    {
       "date":"2 October 2013",
       "leader":"Charles Savarin",
       "state":"Dominica"
    },
    {
       "date":"23 November 2013",
       "leader":"Kokhir Rasulzoda",
       "state":"Tajikistan"
    },
    {
       "date":"4 December 2013",
       "leader":"Xavier Bettel",
       "state":"Luxembourg"
    },
    {
       "date":"25 January 2014",
       "leader":"Mohamed bin Zayed Al Nahyan",
       "state":"United Arab Emirates"
    },
    {
       "date":"27 April 2014",
       "leader":"Aleksandar Vučić",
       "state":"Serbia"
    },
    {
       "date":"22 May 2014",
       "leader":"Prayut Chan-o-cha",
       "state":"Thailand"
    },
    {
       "date":"26 May 2014",
       "leader":"Narendra Modi",
       "state":"India"
    },
    {
       "date":"8 June 2014",
       "leader":"Abdel Fattah el-Sisi",
       "state":"Egypt"
    },
    {
       "date":"13 June 2014",
       "leader":"Gaston Browne",
       "state":"Antigua and Barbuda"
    },
    {
       "date":"19 June 2014",
       "leader":"Felipe VI",
       "state":"Spain"
    },
    {
       "date":"14 August 2014",
       "leader":"Rodney Williams",
       "state":"Antigua and Barbuda"
    },
    {
       "date":"20 October 2014",
       "leader":"Joko Widodo",
       "state":"Indonesia"
    },
    {
       "date":"21 December 2014",
       "leader":"Klaus Iohannis",
       "state":"Romania"
    },
    {
       "date":"15 January 2015",
       "leader":"Filipe Nyusi",
       "state":"Mozambique"
    },
    {
       "date":"23 January 2015",
       "leader":"Salman",
       "state":"Saudi Arabia"
    },
    {
       "date":"3 February 2015",
       "leader":"Sergio Mattarella",
       "state":"Italy"
    },
    {
       "date":"21 March 2015",
       "leader":"Saara Kuugongelwa",
       "state":"Namibia"
    },
    {
       "date":"29 May 2015",
       "leader":"Muhammadu Buhari",
       "state":"Nigeria"
    },
    {
       "date":"6 August 2015",
       "leader":"Andrzej Duda",
       "state":"Poland"
    },
    {
       "date":"9 September 2015",
       "leader":"Keith Rowley",
       "state":"Trinidad and Tobago"
    },
    {
       "date":"29 October 2015",
       "leader":"Bidya Devi Bhandari",
       "state":"Nepal"
    },
    {
       "date":"4 November 2015",
       "leader":"Justin Trudeau",
       "state":"Canada"
    },
    {
       "date":"20 November 2015",
       "leader":"Kassim Majaliwa",
       "state":"Tanzania"
    },
    {
       "date":"26 November 2015",
       "leader":"António Costa",
       "state":"Portugal"
    },
    {
       "date":"1 January 2016",
       "leader":"Guy Parmelin",
       "state":"Switzerland"
    },
    {
       "date":"1 January 2016",
       "leader":"Walter Thurnherr",
       "state":"Switzerland"
    },
    {
       "date":"3 March 2016",
       "leader":"Andrew Holness",
       "state":"Jamaica"
    },
    {
       "date":"9 March 2016",
       "leader":"Marcelo Rebelo de Sousa",
       "state":"Portugal"
    },
    {
       "date":"11 March 2016",
       "leader":"Taneti Maamau",
       "state":"Kiribati"
    },
    {
       "date":"30 March 2016",
       "leader":"Faustin-Archange Touadéra",
       "state":"Central African Republic"
    },
    {
       "date":"6 April 2016",
       "leader":"Patrice Talon",
       "state":"Benin"
    },
    {
       "date":"20 April 2016",
       "leader":"Thongloun Sisoulith",
       "state":"Laos"
    },
    {
       "date":"22 April 2016",
       "leader":"Ulisses Correia e Silva",
       "state":"Cape Verde"
    },
    {
       "date":"20 May 2016",
       "leader":"Tsai Ing-wen",
       "state":"Taiwan"
    },
    {
       "date":"26 May 2016",
       "leader":"Azali Assoumani",
       "state":"Comoros"
    },
    {
       "date":"12 July 2016",
       "leader":"Brahim Ghali",
       "state":"Sahrawi Republic"
    },
    {
       "date":"1 August 2016",
       "leader":"Guðni Th. Jóhannesson",
       "state":"Iceland"
    },
    {
       "date":"13 October 2016",
       "leader":"Vajiralongkorn",
       "state":"Thailand"
    },
    {
       "date":"19 October 2016",
       "leader":"Andrej Plenković",
       "state":"Croatia"
    },
    {
       "date":"14 December 2016",
       "leader":"Abdulla Aripov",
       "state":"Uzbekistan"
    },
    {
       "date":"16 December 2016",
       "leader":"Vadim Krasnoselsky",
       "state":"Transnistria"
    },
    {
       "date":"7 January 2017",
       "leader":"Nana Akufo-Addo",
       "state":"Ghana"
    },
    {
       "date":"19 January 2017",
       "leader":"Adama Barrow",
       "state":"The Gambia"
    },
    {
       "date":"22 January 2017",
       "leader":"Rumen Radev",
       "state":"Bulgaria"
    },
    {
       "date":"23 January 2017",
       "leader":"Pravind Jugnauth",
       "state":"Mauritius"
    },
    {
       "date":"26 January 2017",
       "leader":"Alexander Van der Bellen",
       "state":"Austria"
    },
    {
       "date":"28 February 2017",
       "leader":"Bob Dadae",
       "state":"Papua New Guinea"
    },
    {
       "date":"19 March 2017",
       "leader":"Frank-Walter Steinmeier",
       "state":"Germany"
    },
    {
       "date":"14 May 2017",
       "leader":"Emmanuel Macron",
       "state":"France"
    },
    {
       "date":"15 May 2017",
       "leader":"Patrick Strzoda",
       "state":"Andorra"
    },
    {
       "date":"29 June 2017",
       "leader":"Ana Brnabić",
       "state":"Serbia"
    },
    {
       "date":"21 July 2017",
       "leader":"Tuimaleali'ifano Va'aleto'a Sualauvi II",
       "state":"Samoa"
    },
    {
       "date":"30 August 2017",
       "leader":"Édouard Ngirente",
       "state":"Rwanda"
    },
    {
       "date":"14 September 2017",
       "leader":"Halimah Yacob",
       "state":"Singapore"
    },
    {
       "date":"26 September 2017",
       "leader":"João Lourenço",
       "state":"Angola"
    },
    {
       "date":"1 November 2017",
       "leader":"Ignazio Cassis",
       "state":"Switzerland"
    },
    {
       "date":"24 November 2017",
       "leader":"Emmerson Mnangagwa",
       "state":"Zimbabwe"
    },
    {
       "date":"30 November 2017",
       "leader":"Katrín Jakobsdóttir",
       "state":"Iceland"
    },
    {
       "date":"11 December 2017",
       "leader":"Mateusz Morawiecki",
       "state":"Poland"
    },
    {
       "date":"13 December 2017",
       "leader":"Muse Bihi Abdi",
       "state":"Somaliland"
    },
    {
       "date":"8 January 2018",
       "leader":"Sandra Mason",
       "state":"Barbados"
    },
    {
       "date":"22 January 2018",
       "leader":"George Weah",
       "state":"Liberia"
    },
    {
       "date":"14 February 2018",
       "leader":"Cyril Ramaphosa",
       "state":"South Africa"
    },
    {
       "date":"19 March 2018",
       "leader":"Paula-Mae Weekes",
       "state":"Trinidad and Tobago"
    },
    {
       "date":"1 April 2018",
       "leader":"Mokgweetsi Masisi",
       "state":"Botswana"
    },
    {
       "date":"2 April 2018",
       "leader":"Abiy Ahmed",
       "state":"Ethiopia"
    },
    {
       "date":"4 April 2018",
       "leader":"Julius Maada Bio",
       "state":"Sierra Leone"
    },
    {
       "date":"19 April 2018",
       "leader":"Miguel Díaz-Canel",
       "state":"Cuba"
    },
    {
       "date":"8 May 2018",
       "leader":"Nikol Pashinyan",
       "state":"Armenia"
    },
    {
       "date":"20 May 2018",
       "leader":"Milo Đukanović",
       "state":"Montenegro"
    },
    {
       "date":"25 May 2018",
       "leader":"Mia Mottley",
       "state":"Barbados"
    },
    {
       "date":"2 June 2018",
       "leader":"Pedro Sánchez",
       "state":"Spain"
    },
    {
       "date":"6 June 2018",
       "leader":"Christian Ntsay",
       "state":"Madagascar"
    },
    {
       "date":"7 June 2018",
       "leader":"Mostafa Madbouly",
       "state":"Egypt"
    },
    {
       "date":"22 June 2018",
       "leader":"Taur Matan Ruak",
       "state":"East Timor"
    },
    {
       "date":"15 August 2018",
       "leader":"Mario Abdo Benítez",
       "state":"Paraguay"
    },
    {
       "date":"9 September 2018",
       "leader":"Arif Alvi",
       "state":"Pakistan"
    },
    {
       "date":"18 October 2018",
       "leader":"Maeen Abdulmalik Saeed",
       "state":"Yemen"
    },
    {
       "date":"25 October 2018",
       "leader":"Sahle-Work Zewde",
       "state":"Ethiopia"
    },
    {
       "date":"7 November 2018",
       "leader":"Lotay Tshering",
       "state":"Bhutan"
    },
    {
       "date":"17 November 2018",
       "leader":"Ibrahim Mohamed Solih",
       "state":"Maldives"
    },
    {
       "date":"20 November 2018",
       "leader":"Željko Komšić",
       "state":"Bosnia and Herzegovina"
    },
    {
       "date":"1 December 2018",
       "leader":"Andrés Manuel López Obrador",
       "state":"Mexico"
    },
    {
       "date":"16 December 2018",
       "leader":"Salome Zourabichvili",
       "state":"Georgia"
    },
    {
       "date":"1 January 2019",
       "leader":"Viola Amherd",
       "state":"Switzerland"
    },
    {
       "date":"1 January 2019",
       "leader":"Karin Keller-Sutter",
       "state":"Switzerland"
    },
    {
       "date":"4 January 2019",
       "leader":"Joseph Ngute",
       "state":"Cameroon"
    },
    {
       "date":"19 January 2019",
       "leader":"Andry Rajoelina",
       "state":"Madagascar"
    },
    {
       "date":"23 January 2019",
       "leader":"Krišjānis Kariņš",
       "state":"Latvia"
    },
    {
       "date":"24 January 2019",
       "leader":"Félix Tshisekedi",
       "state":"Congo-Kinshasa"
    },
    {
       "date":"31 January 2019",
       "leader":"Abdullah Sultan Ahmad Shah",
       "state":"Malaysia"
    },
    {
       "date":"20 March 2019",
       "leader":"Qasym-Zhomart Toqaev",
       "state":"Kazakhstan"
    },
    {
       "date":"4 April 2019",
       "leader":"George Vella",
       "state":"Malta"
    },
    {
       "date":"12 April 2019",
       "leader":"Abdel Fattah al-Burhan",
       "state":"Sudan"
    },
    {
       "date":"13 April 2019",
       "leader":"Mohammad Shtayyeh",
       "state":"Palestine"
    },
    {
       "date":"24 April 2019",
       "leader":"Manasseh Sogavare",
       "state":"Solomon Islands"
    },
    {
       "date":"1 May 2019",
       "leader":"Naruhito",
       "state":"Japan"
    },
    {
       "date":"11 May 2019",
       "leader":"David Panuelo",
       "state":"Micronesia"
    },
    {
       "date":"12 May 2019",
       "leader":"Stevo Pendarovski",
       "state":"North Macedonia"
    },
    {
       "date":"16 May 2019",
       "leader":"Xavier Espot Zamora",
       "state":"Andorra"
    },
    {
       "date":"20 May 2019",
       "leader":"Volodymyr Zelenskyy",
       "state":"Ukraine"
    },
    {
       "date":"22 May 2019",
       "leader":"Ersin Tatar",
       "state":"Northern Cyprus"
    },
    {
       "date":"30 May 2019",
       "leader":"James Marape",
       "state":"Papua New Guinea"
    },
    {
       "date":"1 June 2019",
       "leader":"Nayib Bukele",
       "state":"El Salvador"
    },
    {
       "date":"15 June 2019",
       "leader":"Zuzana Čaputová",
       "state":"Slovakia"
    },
    {
       "date":"27 June 2019",
       "leader":"Mette Frederiksen",
       "state":"Denmark"
    },
    {
       "date":"28 June 2019",
       "leader":"Cornelius A. Smith",
       "state":"The Bahamas"
    },
    {
       "date":"30 June 2019",
       "leader":"Abdurrahman Mustafa",
       "state":"Syria"
    },
    {
       "date":"1 July 2019",
       "leader":"David Hurley",
       "state":"Australia"
    },
    {
       "date":"1 July 2019",
       "leader":"Nito Cortizo",
       "state":"Panama"
    },
    {
       "date":"7 July 2019",
       "leader":"David Vunagi",
       "state":"Solomon Islands"
    },
    {
       "date":"8 July 2019",
       "leader":"Kyriakos Mitsotakis",
       "state":"Greece"
    },
    {
       "date":"8 July 2019",
       "leader":"Egils Levits",
       "state":"Latvia"
    },
    {
       "date":"12 July 2019",
       "leader":"Gitanas Nausėda",
       "state":"Lithuania"
    },
    {
       "date":"1 August 2019",
       "leader":"Mohamed Ould Ghazouani",
       "state":"Mauritania"
    },
    {
       "date":"1 August 2019",
       "leader":"Susan Dougan",
       "state":"Saint Vincent and the Grenadines"
    },
    {
       "date":"19 September 2019",
       "leader":"Kausea Natano",
       "state":"Tuvalu"
    },
    {
       "date":"8 October 2019",
       "leader":"Ali Asadov",
       "state":"Azerbaijan"
    },
    {
       "date":"23 October 2019",
       "leader":"Kais Saied",
       "state":"Tunisia"
    },
    {
       "date":"2 December 2019",
       "leader":"Prithvirajsing Roopun",
       "state":"Mauritius"
    },
    {
       "date":"10 December 2019",
       "leader":"Alberto Fernández",
       "state":"Argentina"
    },
    {
       "date":"10 December 2019",
       "leader":"Sanna Marin",
       "state":"Finland"
    },
    {
       "date":"19 December 2019",
       "leader":"Abdelmadjid Tebboune",
       "state":"Algeria"
    },
    {
       "date":"21 December 2019",
       "leader":"Manuel Marrero Cruz",
       "state":"Cuba"
    },
    {
       "date":"7 January 2020",
       "leader":"Luca Beccari",
       "state":"San Marino"
    },
    {
       "date":"11 January 2020",
       "leader":"Haitham bin Tariq",
       "state":"Oman"
    },
    {
       "date":"13 January 2020",
       "leader":"Robert Abela",
       "state":"Malta"
    },
    {
       "date":"13 January 2020",
       "leader":"David Kabua",
       "state":"Marshall Islands"
    },
    {
       "date":"13 January 2020",
       "leader":"Bouchraya Hammoudi Bayoun",
       "state":"Sahrawi Republic"
    },
    {
       "date":"14 January 2020",
       "leader":"Alejandro Giammattei",
       "state":"Guatemala"
    },
    {
       "date":"16 January 2020",
       "leader":"Mikhail Mishustin",
       "state":"Russia"
    },
    {
       "date":"28 January 2020",
       "leader":"Khalid bin Khalifa bin Abdul Aziz Al Thani",
       "state":"Qatar"
    },
    {
       "date":"18 February 2020",
       "leader":"Zoran Milanović",
       "state":"Croatia"
    },
    {
       "date":"27 February 2020",
       "leader":"Umaro Sissoco Embaló",
       "state":"Guinea-Bissau"
    },
    {
       "date":"28 February 2020",
       "leader":"Nuno Gomes Nabiam",
       "state":"Guinea-Bissau"
    },
    {
       "date":"1 March 2020",
       "leader":"Luis Lacalle Pou",
       "state":"Uruguay"
    },
    {
       "date":"4 March 2020",
       "leader":"Denys Shmyhal",
       "state":"Ukraine"
    },
    {
       "date":"13 March 2020",
       "leader":"Katerina Sakellaropoulou",
       "state":"Greece"
    },
    {
       "date":"23 April 2020",
       "leader":"Aslan Bzhania",
       "state":"Abkhazia"
    },
    {
       "date":"24 April 2020",
       "leader":"Aleksander Ankvab",
       "state":"Abkhazia"
    },
    {
       "date":"21 May 2020",
       "leader":"Arayik Harutyunyan",
       "state":"Artsakh"
    },
    {
       "date":"4 June 2020",
       "leader":"Roman Golovchenko",
       "state":"Belarus"
    },
    {
       "date":"11 June 2020",
       "leader":"Hussein Arnous",
       "state":"Syria"
    },
    {
       "date":"18 June 2020",
       "leader":"Évariste Ndayishimiye",
       "state":"Burundi"
    },
    {
       "date":"28 June 2020",
       "leader":"Lazarus Chakwera",
       "state":"Malawi"
    },
    {
       "date":"16 July 2020",
       "leader":"Chan Santokhi",
       "state":"Suriname"
    },
    {
       "date":"2 August 2020",
       "leader":"Irfaan Ali",
       "state":"Guyana"
    },
    {
       "date":"2 August 2020",
       "leader":"Mark Phillips",
       "state":"Guyana"
    },
    {
       "date":"6 August 2020",
       "leader":"Mohamed Ould Bilal",
       "state":"Mauritania"
    },
    {
       "date":"13 August 2020",
       "leader":"Kim Tok-hun",
       "state":"North Korea"
    },
    {
       "date":"14 August 2020",
       "leader":"Sviatlana Tsikhanouskaya",
       "state":"Belarus"
    },
    {
       "date":"16 August 2020",
       "leader":"Luis Abinader",
       "state":"Dominican Republic"
    },
    {
       "date":"1 September 2020",
       "leader":"Pierre Dartout",
       "state":"Monaco"
    },
    {
       "date":"28 September 2020",
       "leader":"Victoire Tomegah Dogbé",
       "state":"Togo"
    },
    {
       "date":"29 September 2020",
       "leader":"Nawaf Al-Ahmad Al-Jaber Al-Sabah",
       "state":"Kuwait"
    },
    {
       "date":"1 October 2020",
       "leader":"Alexander De Croo",
       "state":"Belgium"
    },
    {
       "date":"12 October 2020",
       "leader":"Bisher Al-Khasawneh",
       "state":"Jordan"
    },
    {
       "date":"26 October 2020",
       "leader":"Wavel Ramkalawan",
       "state":"Seychelles"
    },
    {
       "date":"8 November 2020",
       "leader":"Luis Arce",
       "state":"Bolivia"
    },
    {
       "date":"11 November 2020",
       "leader":"Salman bin Hamad Al Khalifa",
       "state":"Bahrain"
    },
    {
       "date":"12 November 2020",
       "leader":"Johnny Briceño",
       "state":"Belize"
    },
    {
       "date":"25 November 2020",
       "leader":"Ingrida Šimonytė",
       "state":"Lithuania"
    },
    {
       "date":"24 December 2020",
       "leader":"Maia Sandu",
       "state":"Moldova"
    },
    {
       "date":"20 January 2021",
       "leader":"Joe Biden",
       "state":"United States"
    },
    {
       "date":"21 January 2021",
       "leader":"Surangel Whipps Jr.",
       "state":"Palau"
    },
    {
       "date":"26 January 2021",
       "leader":"Kaja Kallas",
       "state":"Estonia"
    },
    {
       "date":"28 January 2021",
       "leader":"Sadyr Japarov",
       "state":"Kyrgyzstan"
    },
    {
       "date":"29 January 2021",
       "leader":"Luvsannamsrain Oyun-Erdene",
       "state":"Mongolia"
    },
    {
       "date":"1 February 2021",
       "leader":"Myint Swe",
       "state":"Myanmar"
    },
    {
       "date":"2 February 2021",
       "leader":"Min Aung Hlaing",
       "state":"Myanmar"
    },
    {
       "date":"22 February 2021",
       "leader":"Irakli Garibashvili",
       "state":"Georgia"
    },
    {
       "date":"8 March 2021",
       "leader":"Patrick Achi",
       "state":"Ivory Coast"
    },
    {
       "date":"10 March 2021",
       "leader":"Mohamed al-Menfi",
       "state":"Libya"
    },
    {
       "date":"10 March 2021",
       "leader":"Musa al-Koni",
       "state":"Libya"
    },
    {
       "date":"10 March 2021",
       "leader":"Abdullah al-Lafi",
       "state":"Libya"
    },
    {
       "date":"15 March 2021",
       "leader":"Abdul Hamid Dbeibeh",
       "state":"Libya"
    },
    {
       "date":"19 March 2021",
       "leader":"Samia Suluhu Hassan",
       "state":"Tanzania"
    },
    {
       "date":"22 March 2021",
       "leader":"Albin Kurti",
       "state":"Kosovo"
    },
    {
       "date":"25 March 2021",
       "leader":"Daniel Risch",
       "state":"Liechtenstein"
    },
    {
       "date":"1 April 2021",
       "leader":"Eduard Heger",
       "state":"Slovakia"
    },
    {
       "date":"2 April 2021",
       "leader":"Mohamed Bazoum",
       "state":"Niger"
    },
    {
       "date":"3 April 2021",
       "leader":"Ouhoumoudou Mahamadou",
       "state":"Niger"
    },
    {
       "date":"4 April 2021",
       "leader":"Vjosa Osmani",
       "state":"Kosovo"
    },
    {
       "date":"5 April 2021",
       "leader":"Phạm Minh Chính",
       "state":"Vietnam"
    },
    {
       "date":"20 April 2021",
       "leader":"Mahamat Déby",
       "state":"Chad"
    },
    {
       "date":"27 April 2021",
       "leader":"Jean-Michel Sama Lukonde",
       "state":"Congo-Kinshasa"
    },
    {
       "date":"30 April 2021",
       "leader":"Jacob Jusu Saffa",
       "state":"Sierra Leone"
    },
    {
       "date":"18 May 2021",
       "leader":"Anatole Collinet Makosso",
       "state":"Congo-Brazzaville"
    },
    {
       "date":"24 May 2021",
       "leader":"Guillermo Lasso",
       "state":"Ecuador"
    },
    {
       "date":"24 May 2021",
       "leader":"Assimi Goïta",
       "state":"Mali"
    },
    {
       "date":"24 May 2021",
       "leader":"Fiamē Naomi Mata'afa",
       "state":"Samoa"
    },
    {
       "date":"27 May 2021",
       "leader":"Froyla Tzalam",
       "state":"Belize"
    },
    {
       "date":"21 June 2021",
       "leader":"Robinah Nabbanja",
       "state":"Uganda"
    },
    {
       "date":"25 June 2021",
       "leader":"Ukhnaagiin Khürelsükh",
       "state":"Mongolia"
    },
    {
       "date":"30 June 2021",
       "leader":"Aymen Benabderrahmane",
       "state":"Algeria"
    },
    {
       "date":"7 July 2021",
       "leader":"Isaac Herzog",
       "state":"Israel"
    },
    {
       "date":"12 July 2021",
       "leader":"Salem al-Meslet",
       "state":"Syria"
    },
    {
       "date":"19 July 2021",
       "leader":"Cleopas Dlamini",
       "state":"Eswatini"
    },
    {
       "date":"20 July 2021",
       "leader":"Ariel Henry",
       "state":"Haiti"
    },
    {
       "date":"26 July 2021",
       "leader":"Mary Simon",
       "state":"Canada"
    },
    {
       "date":"28 July 2021",
       "leader":"Philip J. Pierre",
       "state":"Saint Lucia"
    },
    {
       "date":"1 August 2021",
       "leader":"Christian Schmidt",
       "state":"Bosnia and Herzegovina"
    },
    {
       "date":"3 August 2021",
       "leader":"Ebrahim Raisi",
       "state":"Iran"
    },
    {
       "date":"15 August 2021",
       "leader":"Hibatullah Akhundzada",
       "state":"Afghanistan"
    },
    {
       "date":"24 August 2021",
       "leader":"Hakainde Hichilema",
       "state":"Zambia"
    },
    {
       "date":"5 September 2021",
       "leader":"Mamady Doumbouya",
       "state":"Guinea"
    },
    {
       "date":"7 September 2021",
       "leader":"Hasan Akhund",
       "state":"Afghanistan"
    },
    {
       "date":"10 September 2021",
       "leader":"Najib Mikati",
       "state":"Lebanon"
    },
    {
       "date":"17 September 2021",
       "leader":"Philip Davis",
       "state":"The Bahamas"
    },
    {
       "date":"29 September 2021",
       "leader":"Tofiga Vaevalu Falani",
       "state":"Tuvalu"
    },
    {
       "date":"1 October 2021",
       "leader":"Fernando Vérgez Alzaga",
       "state":"Vatican City"
    },
    {
       "date":"2 October 2021",
       "leader":"Carlos Vila Nova",
       "state":"Sao Tome and Principe"
    },
    {
       "date":"4 October 2021",
       "leader":"Fumio Kishida",
       "state":"Japan"
    },
    {
       "date":"7 October 2021",
       "leader":"Aziz Akhannouch",
       "state":"Morocco"
    },
    {
       "date":"11 October 2021",
       "leader":"Alar Karis",
       "state":"Estonia"
    },
    {
       "date":"11 October 2021",
       "leader":"Najla Bouden",
       "state":"Tunisia"
    },
    {
       "date":"12 October 2021",
       "leader":"Akylbek Japarov",
       "state":"Kyrgyzstan"
    },
    {
       "date":"14 October 2021",
       "leader":"Jonas Gahr Støre",
       "state":"Norway"
    },
    {
       "date":"21 October 2021",
       "leader":"Cindy Kiro",
       "state":"New Zealand"
    },
    {
       "date":"9 November 2021",
       "leader":"José Maria Neves",
       "state":"Cape Verde"
    },
    {
       "date":"11 November 2021",
       "leader":"Errol Charles",
       "state":"Saint Lucia"
    },
    {
       "date":"12 November 2021",
       "leader":"Wiliame Katonivere",
       "state":"Fiji"
    },
    {
       "date":"25 November 2021",
       "leader":"Nicolae Ciucă",
       "state":"Romania"
    },
    {
       "date":"6 December 2021",
       "leader":"Karl Nehammer",
       "state":"Austria"
    },
    {
       "date":"8 December 2021",
       "leader":"Olaf Scholz",
       "state":"Germany"
    },
    {
       "date":"17 December 2021",
       "leader":"Petr Fiala",
       "state":"Czech Republic"
    },
    {
       "date":"27 December 2021",
       "leader":"Siaosi Sovaleni",
       "state":"Tonga"
    },
    {
       "date":"5 January 2022",
       "leader":"Älihan Smaiylov",
       "state":"Kazakhstan"
    },
    {
       "date":"16 January 2022",
       "leader":"Dimitar Kovačevski",
       "state":"North Macedonia"
    },
    {
       "date":"19 January 2022",
       "leader":"Osman Hussein",
       "state":"Sudan"
    },
    {
       "date":"27 January 2022",
       "leader":"Xiomara Castro",
       "state":"Honduras"
    },
    {
       "date":"9 February 2022",
       "leader":"Félix Moloua",
       "state":"Central African Republic"
    },
    {
       "date":"3 March 2022",
       "leader":"Adriano Maleiane",
       "state":"Mozambique"
    },
    {
       "date":"11 March 2022",
       "leader":"Gabriel Boric",
       "state":"Chile"
    },
    {
       "date":"13 March 2022",
       "leader":"Vahagn Khachaturyan",
       "state":"Armenia"
    },
    {
       "date":"19 March 2022",
       "leader":"Serdar Berdimuhamedow",
       "state":"Turkmenistan"
    },
    {
       "date":"7 April 2022",
       "leader":"Rashad al-Alimi",
       "state":"Yemen"
    },
    {
       "date":"11 April 2022",
       "leader":"Shehbaz Sharif",
       "state":"Pakistan"
    },
    {
       "date":"28 April 2022",
       "leader":"Dritan Abazović",
       "state":"Montenegro"
    },
    {
       "date":"8 May 2022",
       "leader":"Rodrigo Chaves Robles",
       "state":"Costa Rica"
    },
    {
       "date":"10 May 2022",
       "leader":"Katalin Novák",
       "state":"Hungary"
    },
    {
       "date":"10 May 2022",
       "leader":"Yoon Suk-yeol",
       "state":"South Korea"
    },
    {
       "date":"12 May 2022",
       "leader":"Ünal Üstel",
       "state":"Northern Cyprus"
    },
    {
       "date":"12 May 2022",
       "leader":"Ranil Wickremesinghe",
       "state":"Sri Lanka"
    },
    {
       "date":"16 May 2022",
       "leader":"Élisabeth Borne",
       "state":"France"
    },
    {
       "date":"20 May 2022",
       "leader":"José Ramos-Horta",
       "state":"East Timor"
    },
    {
       "date":"20 May 2022",
       "leader":"Han Duck-soo",
       "state":"South Korea"
    },
    {
       "date":"23 May 2022",
       "leader":"Anthony Albanese",
       "state":"Australia"
    },
    {
       "date":"24 May 2022",
       "leader":"Alan Gagloyev",
       "state":"South Ossetia"
    },
    {
       "date":"30 May 2022",
       "leader":"Aleksander Rozenberg",
       "state":"Transnistria"
    },
    {
       "date":"1 June 2022",
       "leader":"Robert Golob",
       "state":"Slovenia"
    },
    {
       "date":"9 June 2022",
       "leader":"Hassan Sheikh Mohamud",
       "state":"Somalia"
    },
    {
       "date":"20 June 2022",
       "leader":"Konstantin Dzhussoyev",
       "state":"South Ossetia"
    },
    {
       "date":"24 June 2022",
       "leader":"Dickon Mitchell",
       "state":"Grenada"
    },
    {
       "date":"25 June 2022",
       "leader":"Hamza Abdi Barre",
       "state":"Somalia"
    },
    {
       "date":"30 June 2022",
       "leader":"Bongbong Marcos",
       "state":"Philippines"
    },
    {
       "date":"16 July 2022",
       "leader":"Bernard Gomou",
       "state":"Guinea"
    },
    {
       "date":"22 July 2022",
       "leader":"Dinesh Gunawardena",
       "state":"Sri Lanka"
    },
    {
       "date":"23 July 2022",
       "leader":"Nikenike Vurobaravu",
       "state":"Vanuatu"
    },
    {
       "date":"24 July 2022",
       "leader":"Bajram Begaj",
       "state":"Albania"
    },
    {
       "date":"24 July 2022",
       "leader":"Ahmad Nawaf Al-Ahmad Al-Sabah",
       "state":"Kuwait"
    },
    {
       "date":"25 July 2022",
       "leader":"Droupadi Murmu",
       "state":"India"
    },
    {
       "date":"2 August 2022",
       "leader":"Galab Donev",
       "state":"Bulgaria"
    },
    {
       "date":"6 August 2022",
       "leader":"Terrance Drew",
       "state":"Saint Kitts and Nevis"
    },
    {
       "date":"7 August 2022",
       "leader":"Gustavo Petro",
       "state":"Colombia"
    },
    {
       "date":"7 September 2022",
       "leader":"Gervais Ndirakobuca",
       "state":"Burundi"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Antigua and Barbuda"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Australia"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"The Bahamas"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Belize"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Canada"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Grenada"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Jamaica"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"New Zealand"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Papua New Guinea"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Saint Kitts and Nevis"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Saint Lucia"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Saint Vincent and the Grenadines"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Solomon Islands"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"Tuvalu"
    },
    {
       "date":"8 September 2022",
       "leader":"Charles III",
       "state":"United Kingdom"
    },
    {
       "date":"13 September 2022",
       "leader":"William Ruto",
       "state":"Kenya"
    },
    {
       "date":"17 September 2022",
       "leader":"Amadou Ba",
       "state":"Senegal"
    },
    {
       "date":"27 September 2022",
       "leader":"Mohammed bin Salman",
       "state":"Saudi Arabia"
    },
    {
       "date":"29 September 2022",
       "leader":"Russ Kun",
       "state":"Nauru"
    },
    {
       "date":"30 September 2022",
       "leader":"Ibrahim Traoré",
       "state":"Burkina Faso"
    },
    {
       "date":"1 October 2022",
       "leader":"Maria Luisa Berti",
       "state":"San Marino"
    },
    {
       "date":"1 October 2022",
       "leader":"Manuel Ciavatta"
    },
    {
       "date":"12 October 2022",
       "leader":"Saleh Kebzabo",
       "state":"Chad"
    },
    {
       "date":"17 October 2022",
       "leader":"Abdul Latif Rashid",
       "state":"Iraq"
    },
    {
       "date":"18 October 2022",
       "leader":"Ulf Kristersson",
       "state":"Sweden"
    },
    {
       "date":"21 October 2022",
       "leader":"Apollinaire Kyélem",
       "state":"Burkina Faso"
    },
    {
       "date":"22 October 2022",
       "leader":"Giorgia Meloni",
       "state":"Italy"
    },
    {
       "date":"25 October 2022",
       "leader":"Rishi Sunak",
       "state":"United Kingdom"
    },
    {
       "date":"27 October 2022",
       "leader":"Mohammed Shia' Al Sudani",
       "state":"Iraq"
    },
    {
       "date":"27 October 2022",
       "leader":"Musalia Mudavadi",
       "state":"Kenya"
    },
    {
       "date":"28 October 2022",
       "leader":"Sam Matekane",
       "state":"Lesotho"
    },
    {
       "date":"4 November 2022",
       "leader":"Ishmael Kalsakau",
       "state":"Vanuatu"
    },
    {
       "date":"11 November 2022",
       "leader":"Patrice Trovoada",
       "state":"Sao Tome and Principe"
    },
    {
       "date":"16 November 2022",
       "leader":"Denis Bećirović",
       "state":"Bosnia and Herzegovina"
    },
    {
       "date":"16 November 2022",
       "leader":"Željka Cvijanović",
       "state":"Bosnia and Herzegovina"
    },
    {
       "date":"24 November 2022",
       "leader":"Anwar Ibrahim",
       "state":"Malaysia"
    },
    {
       "date":"5 December 2022",
       "leader":"Choguel Kokalla Maïga",
       "state":"Mali"
    },
    {
       "date":"7 December 2022",
       "leader":"Dina Boluarte",
       "state":"Peru"
    },
    {
       "date":"17 December 2022",
       "leader":"Leo Varadkar",
       "state":"Ireland"
    },
    {
       "date":"21 December 2022",
       "leader":"Alberto Otárola",
       "state":"Peru"
    },
    {
       "date":"22 December 2022",
       "leader":"Nataša Pirc Musar",
       "state":"Slovenia"
    },
    {
       "date":"24 December 2022",
       "leader":"Sitiveni Rabuka",
       "state":"Fiji"
    },
    {
       "date":"26 December 2022",
       "leader":"Pushpa Kamal Dahal",
       "state":"Nepal"
    },
    {
       "date":"29 December 2022",
       "leader":"Benjamin Netanyahu",
       "state":"Israel"
    },
    {
       "date":"30 December 2022",
       "leader":"Sonexay Siphandone",
       "state":"Laos"
    },
    {
       "date":"1 January 2023",
       "leader":"Luiz Inácio Lula da Silva",
       "state":"Brazil"
    },
    {
       "date":"1 January 2023",
       "leader":"Élisabeth Baume-Schneider",
       "state":"Switzerland"
    },
    {
       "date":"1 January 2023",
       "leader":"Albert Rösti",
       "state":"Switzerland"
    },
    {
       "date":"5 January 2023",
       "leader":"Dinorah Figuera",
       "state":"Venezuela"
    },
    {
       "date":"9 January 2023",
       "leader":"Alain Claude Bilie By Nze",
       "state":"Gabon"
    },
    {
       "date":"18 January 2023",
       "leader":"Võ Thị Ánh Xuân",
       "state":"Vietnam"
    },
    {
       "date":"25 January 2023",
       "leader":"Borjana Krišto",
       "state":"Bosnia and Herzegovina"
    },
    {
       "date":"25 January 2023",
       "leader":"Chris Hipkins",
       "state":"New Zealand"
    },
    {
       "date":"31 January 2023",
       "leader":"Chen Chien-jen",
       "state":"Taiwan"
    },
    {
       "date":"1 February 2023",
       "leader":"Manuela Roka Botey",
       "state":"Equatorial Guinea"
    },
    {
       "date":"1 February 2023",
       "leader":"Marcella Liburd",
       "state":"Saint Kitts and Nevis"
    }
 ]