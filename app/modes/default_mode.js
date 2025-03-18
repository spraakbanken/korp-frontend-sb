/** @format */
import settings from "@/settings";

settings["frontpage"]["examples"] = [
  {
    label: 'Former av ordet "fågel" i skönlitteratur',
    params: {
      search: "lemgram|fågel..nn.1",
      corpus: "novels",
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
      corpus: "newstexts.svtnews,newstexts.webnews,attasidor,da",
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
      corpus: "strindberg",
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
      search: 'cqp|aux:[lex contains "ha\\.\\.vb\\.1" & msd = ".*VB\\.PRS\\.AKT.*"] []* [(msd = ".*VB\\.SUP\\.AKT.*" | msd = ".*VB\\.SUP\\.SFO.*") & dephead=aux.ref & (deprel="VG" | deprel="IV")]',
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
      corpus: "medical",
    },
  },
  {
    label: 'Ordet "örfil" i finlandssvenska texter',
    params: {
      search_tab: 1,
      search: "cqp",
      cqp: '[lemma contains "örfil"]',
      corpus: "fisk",
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
      corpus: "socialmedia.bloggmix",
      show_stats: 1,
      result_tab: 2,
    },
  },
  {
    label: 'Ordbild för "björn" i skönlitteratur',
    params: {
      search: "lemgram|björn..nn.1",
      isCaseInsensitive: 1,
      corpus: "novels",
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
      corpus: "newstexts.gp,newstexts.webnews,newstexts.svtnews,attasidor,da,press95,press96,press97,press98",
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
