/** @format */
import settings from "@/settings";

settings["frontpage"]["examples"] = [
  {
    label: 'Former av ordet "fågel" i skönlitteratur',
    params: {
      search: "lemgram|fågel..nn.1",
      corpus: "aspacsv,rom99,romg,romi,romii,saltnld-sv,storsuc",
      show_stats: 1,
    },
    hint: "Öppna fliken Statistik för att se en fördelning av ordformer",
  },
  {
    label: {
      swe: 'Ord som börjar på "covid" i nyheter',
      eng: 'Word starting with "covid" in news',
    },
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[word ^= "covid" & word != "covid-19"]',
      corpus:
        "attasidor,da,svt-2004,svt-2005,svt-2006,svt-2007,svt-2008,svt-2009,svt-2010,svt-2011,svt-2012,svt-2013,svt-2014,svt-2015,svt-2016,svt-2017,svt-2018,svt-2019,svt-2020,svt-2021,svt-2022,svt-2023,svt-nodate,webbnyheter2001,webbnyheter2002,webbnyheter2003,webbnyheter2004,webbnyheter2005,webbnyheter2006,webbnyheter2007,webbnyheter2008,webbnyheter2009,webbnyheter2010,webbnyheter2011,webbnyheter2012,webbnyheter2013",
    },
  },
  {
    label: {
      swe: "Upprepade adverb i August Strindbergs romaner och brev",
      eng: "Repeated adverbs in August Strindberg's novels and letters",
    },
    params: {
      search_tab: 2,
      search: 'cqp|a:[pos = "AB"] [word=a.word]+',
      corpus: "strindbergbrev,strindbergromaner",
    },
  },
  {
    label: {
      swe: "Perfektkonstruktioner i dependensstrukturer",
      eng: "Present perfects using dependency structure",
    },
    hint: {
      swe: 'Se <a href="https://spraakbanken.gu.se/blogg/20231009-korp-tips-and-tricks-using-cqp-labels-to-search-for-dependency-structures">blogginlägg</a>',
      eng: 'See <a href="https://spraakbanken.gu.se/en/blog/20231009-korp-tips-and-tricks-using-cqp-labels-to-search-for-dependency-structures">blog post</a>',
    },
    params: {
      search_tab: 2,
      search:
        'cqp|aux:[lex contains "ha\\.\\.vb\\.1" & msd = ".*VB\\.PRS\\.AKT.*"] []* [(msd = ".*VB\\.SUP\\.AKT.*" | msd = ".*VB\\.SUP\\.SFO.*") & dephead=aux.ref & (deprel="VG" | deprel="IV")]',
    },
  },
  {
    label: "Grattis på (substantiv)",
    hint: 'Tips: Spara sökningen och jämför med en liknande men med "till" istället, se avsnittet <em>Jämförelser</em> i <a href="https://spraakbanken.gu.se/verktyg/korp/anvandarhandledning">användarhandledningen</a>',
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[word = "grattis"] [word = "på"] [pos = "NN"]',
    },
  },
  {
    label: '"Bil" som efterled i medicinska texter',
    params: {
      suffix: 1,
      search: "lemgram|bil..nn.1",
      corpus:
        "diabetolog,lt1996,lt1997,lt1998,lt1999,lt2000,lt2001,lt2002,lt2003,lt2004,lt2005,lt2006,smittskydd",
    },
  },
  {
    label: 'Ordet "örfil" i finlandssvenska texter',
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[lemma contains "örfil"]',
      corpus:
        "abounderrattelser2012,abounderrattelser2013,astra1960-1979,astranova,at2012,barnlitteratur,borgabladet,bullen,fanbararen,finsktidskrift,fnb1999,fnb2000,forumfeot,fsbbloggvuxna,fsbessaistik,fsbsakprosa,fsbskonlit1960-1999,fsbskonlit2000tal,hankeiten,hanken,hbl1991,hbl1998,hbl1999,hbl20122013,hbl2014,informationstidningar,jakobstadstidning1999,jakobstadstidning2000,jft,kallan,lagtexter,magmakolumner,meddelanden,myndighet,nyaargus,osterbottenstidning2011,osterbottenstidning2012,osterbottenstidning2013,osterbottenstidning2014,ostranyland,pargaskungorelser2011,pargaskungorelser2012,propositioner,studentbladet,svenskbygden,sydosterbotten2012,sydosterbotten2013,sydosterbotten2014,ungdomslitteratur,vasabladet1991,vasabladet2012,vasabladet2013,vasabladet2014,vastranyland,sydosterbotten2011,sydosterbotten2010",
      reading_mode: 1,
    },
  },
  {
    label: 'Jämför "orkar", "ids" och "tyar"',
    hint: "Kryssa i alla rader och öppna kartan över författarens hemort",
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[(word = "orkar" | word = "ids" | word = "tyar")]',
      corpus:
        "bloggmix1998,bloggmix1999,bloggmix2000,bloggmix2001,bloggmix2002,bloggmix2003,bloggmix2004,bloggmix2005,bloggmix2006,bloggmix2007,bloggmix2008,bloggmix2009,bloggmix2010,bloggmix2011,bloggmix2012,bloggmix2013,bloggmix2014,bloggmix2015,bloggmix2016,bloggmix2017,bloggmixodat",
      show_stats: 1,
      result_tab: 2,
    },
  },
  {
    label: 'Ordbild för "björn" i skönlitteratur',
    params: {
      search: "lemgram|björn..nn.1",
      isCaseInsensitive: 1,
      corpus: "aspacsv,rom99,romg,romi,romii,saltnld-sv,storsuc",
      word_pic: 1,
      result_tab: 3,
    },
  },
  {
    label: 'Ordbild för "liv" i poesi',
    params: {
      search: "lemgram|liv..nn.1",
      isCaseInsensitive: 1,
      corpus: "poeter",
      word_pic: 1,
      result_tab: 3,
    },
  },
  {
    label: "Mörker i poesi",
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[word _= "mörk" %c]',
      corpus: "poeter",
      show_stats: 1,
      result_tab: 2,
      stats_reduce: "lemma",
    },
  },
  {
    label: "Krig i nyheterna",
    hint: "Testa trenddiagrammet!",
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[word _= "krig"]',
      corpus:
        "attasidor,da,gp1994,gp2001,gp2002,gp2003,gp2004,gp2005,gp2006,gp2007,gp2008,gp2009,gp2010,gp2011,gp2012,gp2013,gp2d,press95,press96,press97,press98,svt-2004,svt-2005,svt-2006,svt-2007,svt-2008,svt-2009,svt-2010,svt-2011,svt-2012,svt-2013,svt-2014,svt-2015,svt-2016,svt-2017,svt-2018,svt-2019,svt-2020,svt-2021,svt-2022,svt-2023,webbnyheter2001,webbnyheter2002,webbnyheter2003,webbnyheter2004,webbnyheter2005,webbnyheter2006,webbnyheter2007,webbnyheter2008,webbnyheter2009,webbnyheter2010,webbnyheter2011,webbnyheter2012,webbnyheter2013",
      show_stats: 1,
      result_tab: 2,
    },
  },
  {
    label: "De tre första orden i varje mening",
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: "<sentence> []{3,3}",
    },
  },
  {
    label: "Futurum preteritum i kursböcker",
    hint: 'Läs mer om <a href="https://spraakbanken.gu.se/resurser/coctaill" target="_blank">COCTAILL-korpusen</a>',
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[lex contains "skola..vb.2" & msd = "VB.PRT.AKT" & _.lesson_cefr_level = "C1"] [pos != "VB"]{0,6} [pos = "VB"]',
      corpus: "coctaill-ae,coctaill-lt",
    },
  },
  {
    label: 'den + singular ("den värsta sjukdom")',
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[msd *= "DT\\..*\\.SIN\\.DEF" & lex contains "en..al.1"] [pos = "AB" & word !*= "här|där" %c]{0,1} [pos = "JJ" | pos = "PC" | pos = "RO"]{1,2} [msd *= "NN\\..*\\.SIN\\.IND\\..*" & word !*= "januari|februari|mars|april|maj|juni|juli|augusti|september|oktober|november|december" %c]',
    },
  },
];
