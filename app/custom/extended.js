export default {
    complemgramExtended: {
        template: `<autoc
        input='input'
        isRawInput='isRawInput'
        on-change='onChange(output, isRawOutput)'
        type='lemgram'
        variant='affix'
        error-on-empty='true'
        error-message='choose_value'/>
        `,
        controller: [
            "$scope", function($scope) {
                if($scope.model) {
                    $scope.currentVal = $scope.model.replace(/[\\+\.\*:]*$/, "").replace(/^\\\+/, "")
                    $scope.input = $scope.currentVal
                    $scope.isRawInput = false
                } else {
                    $scope.currentVal = ""
                }
                let setModel = () => {
                    if(["starts_with_contains", "not_starts_with_contains"].includes($scope.orObj.op)) {
                        $scope.model = $scope.currentVal + "\\+"
                    } else if(["ends_with_contains", "not_ends_with_contains"].includes($scope.orObj.op)) {
                        $scope.model = "\\+" + $scope.currentVal + ":.*"
                    } else if(["incontains_contains", "not_incontains_contains"].includes($scope.orObj.op)) {
                        $scope.model = "\\+" + $scope.currentVal + "\\+"
                    }
                }
                $scope.$watch("orObj.op", () => {
                    setModel()
                })
                $scope.onChange = (output, isRawOutput) => {
                    if(!isRawOutput) {
                        $scope.currentVal = output
                        setModel(output)
                    }
                }
        }],
    },
    msd: {
        template: `
            <input ng-model="input" class="arg_value" escaper ng-model-options='{debounce : {default : 300, blur : 0}, updateOn: "default blur"}'>
            <span ng-click="onIconClick()" class="fa fa-info-circle"></span>
        `,
        controller: ["$scope", "$uibModal", function($scope, $uibModal) {
            let modal = null
            const msdHTML = settings.markup.msd
            const template = `
                <div>
                    <div class="modal-header">
                        <h3 class="modal-title">{{'msd_long' | loc:$root.lang}}</h3>
                        <span ng-click="clickX()" class="close-x">×</span>
                    </div>
                    <div class="modal-body msd-modal" ng-click="msdClick($event)">${msdHTML}</div>
                </div>`

            $scope.onIconClick = () => {
                modal = $uibModal.open({
                    template: template,
                    scope: $scope
                })
            }

            $scope.clickX = () => modal.close()

            $scope.msdClick = (event) => {
                const val = $(event.target).parent().data("value")
                if(!val) return
                $scope.input = val
                modal.close()
            }
        }]
    },
    compwf: {
        template: "<input ng-model='currentVal'>",
        controller: ["$scope", function($scope) {
            let strip = str => str.replace(/[\\+\.\*]*$/, "").replace(/^\\\+/, "")
            if($scope.model && strip($scope.model) != ".+?") {
                $scope.currentVal = strip($scope.model)
            }
            let setModel = () => {
                let val = $scope.currentVal || ".+?"
                if(["starts_with_contains", "not_starts_with_contains"].includes($scope.orObj.op)) {
                    $scope.model = val + "\\+"
                } else if(["ends_with_contains", "not_ends_with_contains"].includes($scope.orObj.op)) {
                    $scope.model = "\\+" + val
                } else if(["incontains_contains", "not_incontains_contains"].includes($scope.orObj.op)) {
                    $scope.model = "\\+" + val + "\\+"
                }
            }
            $scope.$watch("orObj.op", (newVal) => {
                setModel()
            })
            $scope.$watch("currentVal", (newVal) => {
                setModel()
            })
        }]
    },
    dateInterval: {
        template: `
        <div class="date_interval_arg_type">
            <h3>{{'simple' | loc:$root.lang}}</h3>
            <form ng-submit="commitDateInput()">
                <div class="" style="margin-bottom: 1rem;">
                    <span class="" style="display : inline-block; width: 32px; text-transform: capitalize;">{{'from' | loc:$root.lang}}</span> <input type="text" ng-blur="commitDateInput()" ng-model="fromDateString" placeholder="'1945' {{'or' | loc:$root.lang}} '1945-08-06'"/>
                </div>
                <div>
                    <span class="" style="display : inline-block; width: 32px; text-transform: capitalize;">{{'to' | loc:$root.lang}}</span> <input type="text" ng-blur="commitDateInput()" ng-model="toDateString" placeholder="'1968' {{'or' | loc:$root.lang}} '1968-04-04'"/>
                </div>
                <button type="submit" class="hidden" />
            </form>
            <div class="section mt-4"> 
                <h3>{{'advanced' | loc:$root.lang}}</h3>
                <button class="btn btn-default btn-sm" popper no-close-on-click my="left top" at="right top"> 
                    <i class="fa fa-calendar"></i> <span style="text-transform: capitalize;">{{'from' | loc:$root.lang}} </span>
                </button> 
                {{combined.format("YYYY-MM-DD HH:mm")}} 
                <time-interval 
                    ng-click="from_click($event)" 
                    class="date_interval popper_menu dropdown-menu" 
                    date-model="from_date" 
                    time-model="from_time" 
                    model="combined" 
                    min-date="minDate" 
                    max-date="maxDate"></time-interval>
            </div>
                
            <div class="section"> 
                <button class="btn btn-default btn-sm" popper no-close-on-click my="left top" at="right top"> 
                    <i class="fa fa-calendar"></i> <span style="text-transform: capitalize;">{{'to' | loc:$root.lang}} </span>
                </button> 
                {{combined2.format("YYYY-MM-DD HH:mm")}} 
                
                <time-interval 
                    ng-click="from_click($event)" 
                    class="date_interval popper_menu dropdown-menu" 
                    date-model="to_date" 
                    time-model="to_time" 
                    model="combined2" 
                    my="left top" 
                    at="right top"
                    min-date="minDate"
                    max-date="maxDate"></time-interval>
            </div>
        </div>`,
        controller: [
            "$scope", "searches", "$timeout", function($scope, searches, $timeout) {
                let s = $scope
                let cl = settings.corpusListing

                let updateIntervals = function() {
                    let moments = cl.getMomentInterval();
                    if (moments.length) {
                        let [fromYear, toYear] = _.invokeMap(moments, "toDate")
                        s.minDate = fromYear
                        s.maxDate = toYear
                    } else {
                        let [from, to] = cl.getTimeInterval()
                        s.minDate = moment(from.toString(), "YYYY").toDate();
                        s.maxDate = moment(to.toString(), "YYYY").toDate();
                    }
                };
                s.commitDateInput = () => {
                    if(s.fromDateString) {
                        let simpleFrom = s.fromDateString.length == 4
                        s.from_date = moment(s.fromDateString, simpleFrom ? "YYYY" : "YYYY-MM-DD" ).toDate()
                    }
                    if(s.toDateString) {
                        let simpleTo = s.toDateString.length == 4
                        if(simpleTo) {
                            var dateString = `${s.toDateString}-12-31`
                        }
                        s.to_date = moment(dateString || s.dateString).toDate()
                        s.to_time = moment("235959", "HHmmss").toDate()
                     }
                }
                s.$on("corpuschooserchange", function() {
                  updateIntervals()
                })

                updateIntervals()

                s.from_click = function(event) {
                  event.originalEvent.preventDefault()
                  event.originalEvent.stopPropagation()
                }

                let getYear = function(val) {
                  return moment(val.toString(), "YYYYMMDD").toDate();
                }

                let getTime = function(val) {
                  return moment(val.toString(), "HHmmss").toDate();
                }

                if (!s.model) {
                    s.from_date = s.minDate
                    s.to_date = s.maxDate
                    let [from, to] = _.invokeMap(cl.getMomentInterval(), "toDate")
                    s.from_time = from 
                    s.to_time = to
                } else if (s.model.length === 4) {
                    let [fromYear, toYear] = _.map(s.model.slice(0, 3), getYear)
                    s.from_date = fromYear
                    s.to_date = toYear
                    let [fromTime, toTime] = _.map(s.model.slice(2), getTime)
                    s.from_time = fromTime
                    s.to_time = toTime
                }
                s.$watchGroup(["combined", "combined2"], function([combined, combined2]) {
                    s.model = [
                        moment(s.from_date).format("YYYYMMDD"), 
                        moment(s.to_date).format("YYYYMMDD"), 
                        moment(s.from_time).format("HHmmss"), 
                        moment(s.to_time).format("HHmmss")
                   ]
                })
            }
        ]
    },
    npeglECat: {
        controller: [
            "$scope", function($scope) {
                const labels = [
                    "Noun (N)",
                    "Common noun (N.C)",
                    "Proper noun (N.P)",
                    "Nordic \"hinn\" (H)",
                    "Personal pronoun (Per)",
                    "Demonstrative pronoun (Dem)",
                    "Possesive pronoun (Poss)",
                    "(Strong) Quantifier (Q)",
                    "Modifier (Md)",
                    "Positional predicate (Md.Pos)",
                    "Numeral or weak quantifier (Md.Nu/WQ)",
                    "Cardinal numeral (Md.Nu/WQ.Nu)",
                    "Weak quantifier (Md.Nu/WQ.WQ)",
                    "Adjective (Md.Aj)",
                    "Functional adjective (Md.Aj.Fn)",
                    "Ordinal numeral (Md.Aj.Fn.Ord)",
                    "Defective adjective (Md.Aj.Fn.Df)",
                    "Determiner-like adjective (Md.Aj.Fn.Dt)",
                    "Lexical adjective (Md.Aj.Lx)",
                    "Past participle (Md.Aj.Lx.Pst)",
                    "Present participle (Md.Aj.Lx.Pre)",
                    "Other derived adjective (Md.Aj.Lx.Der)",
                    "Prototypical adjective (Md.Aj.Lx.Pro)",
                    "IXP (IXP)",
                    "Adjectival associate (Assoc)",
                    "Genitival phrase (GenP)",
                    "Prepositional phrase (PP)",
                    "Apposition (App)",
                    "Relative clause (RC)",
                    "Complement clause (CC)",
                    "Finite complement clause (CC.Fi)",
                    "Non-finite complement clause (CC.Nf)",
                    "Adverbial (Adv)",
                    "Modifier of modifier (Mdmd)",
                    "Complement of modifier (Mdcm)",
                    "Nominal complement of modifier (Mdcm.N)",
                    "Prepositional complement of modifier (Mdcm.P)",
                    "Complement of degree element (Dgcm)",
                    "Bare complement of degree element (Dgcm.Br)",
                    "Marked complement of degree element (Dgcm.Mk)",
                    "Coordinator (&)",
                    "Coordinator of IXPs (&.IXP)",
                    "Coordinator of Nouns (&.N)",
                    "Coordinator of Possessives (&.Poss)",
                    "Coordinator of Adjectives (&.Aj)",
                    "Coordinator of Numericals (&.Nu)",
                    "Initial part of a discontinuous coordinator (&.Init)",
                    "Other or uncertain coordinator (&.Other)"
                ];
    
                const exactMatching = _.fromPairs([
                    "N:[0-9]+",
                    "N[.]C:[0-9]+",
                    "N[.]P:[0-9]+",
                    "H:[0-9]+",
                    "Per:[0-9]+",
                    "Dem:[0-9]+",
                    "Poss:[0-9]+",
                    "Q:[0-9]+",
                    "Md:[0-9]+",
                    "Md[.]Pos:[0-9]+",
                    "Md[.]Nu/WQ:[0-9]+",
                    "Md[.]Nu/WQ[.]Nu:[0-9]+",
                    "Md[.]Nu/WQ[.]WQ:[0-9]+",
                    "Md[.]Aj:[0-9]+",
                    "Md[.]Aj[.]Fn:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Ord:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Df:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Dt:[0-9]+",
                    "Md[.]Aj[.]Lx:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pst:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pre:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Der:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pro:[0-9]+",
                    "IXP:[0-9]+",
                    "Assoc:[0-9]+",
                    "GenP:[0-9]+",
                    "PP:[0-9]+",
                    "App:[0-9]+",
                    "RC:[0-9]+",
                    "CC:[0-9]+",
                    "CC[.]Fi:[0-9]+",
                    "CC[.]Nf:[0-9]+",
                    "Adv:[0-9]+",
                    "Mdmd:[0-9]+",
                    "Mdcm:[0-9]+",
                    "Mdcm[.]N:[0-9]+",
                    "Mdcm[.]P:[0-9]+",
                    "Dgcm:[0-9]+",
                    "Dgcm[.]Br:[0-9]+",
                    "Dgcm[.]Mk:[0-9]+",
                    "&:[0-9]+",
                    "&[.]IXP:[0-9]+",
                    "&[.]N:[0-9]+",
                    "&[.]Poss:[0-9]+",
                    "&[.]Aj:[0-9]+",
                    "&[.]Nu:[0-9]+",
                    "&[.]Init:[0-9]+",
                    "&[.]Other:[0-9]+"
                ].map((elem, idx) => [elem, idx]));
    
                const matching = _.fromPairs([
                    "N([.][^:]+)?:[0-9]+",
                    "N[.]C:[0-9]+",
                    "N[.]P:[0-9]+",
                    "H:[0-9]+",
                    "Per:[0-9]+",
                    "Dem:[0-9]+",
                    "Poss:[0-9]+",
                    "Q:[0-9]+",
                    "Md([.][^:]+)?:[0-9]+",
                    "Md[.]Pos:[0-9]+",
                    "Md[.]Nu/WQ([.][^:]+)?:[0-9]+",
                    "Md[.]Nu/WQ[.]Nu:[0-9]+",
                    "Md[.]Nu/WQ[.]WQ:[0-9]+",
                    "Md[.]Aj([.][^:]+)?:[0-9]+",
                    "Md[.]Aj[.]Fn([.][^:]+)?:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Ord:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Df:[0-9]+",
                    "Md[.]Aj[.]Fn[.]Dt:[0-9]+",
                    "Md[.]Aj[.]Lx([.][^:]+)?:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pst:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pre:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Der:[0-9]+",
                    "Md[.]Aj[.]Lx[.]Pro:[0-9]+",
                    "IXP:[0-9]+",
                    "Assoc:[0-9]+",
                    "GenP:[0-9]+",
                    "PP:[0-9]+",
                    "App:[0-9]+",
                    "RC:[0-9]+",
                    "CC([.][^:]+)?:[0-9]+",
                    "CC[.]Fi:[0-9]+",
                    "CC[.]Nf:[0-9]+",
                    "Adv:[0-9]+",
                    "Mdmd:[0-9]+",
                    "Mdcm([.][^:]+)?:[0-9]+",
                    "Mdcm[.]N:[0-9]+",
                    "Mdcm[.]P:[0-9]+",
                    "Dgcm([.][^:]+)?:[0-9]+",
                    "Dgcm[.]Br:[0-9]+",
                    "Dgcm[.]Mk:[0-9]+",
                    "&([.][^:]+)?:[0-9]+",
                    "&[.]IXP:[0-9]+",
                    "&[.]N:[0-9]+",
                    "&[.]Poss:[0-9]+",
                    "&[.]Aj:[0-9]+",
                    "&[.]Nu:[0-9]+",
                    "&[.]Init:[0-9]+",
                    "&[.]Other:[0-9]+"
                ].map((elem, idx) => [elem, idx]));
    
                const data = { "=": exactMatching, "*=": matching, "!=": exactMatching, "!*=": matching }
    
                $scope.$watch("input", () => {
                    $scope.model = Object.keys(data[$scope.orObj.op])[$scope.input]
                })
    
                $scope.$watch("orObj.op", (op, prevOp) => {
                    if (op != prevOp) {
                        // translate value from previous operator to new
                        $scope.model = Object.keys(data[op])[$scope.input]
                    }  
                })
    
                if ($scope.model) {
                    $scope.input = data[$scope.orObj.op][$scope.model]
                } else {
                    $scope.input = 0
                }
    
                $scope.dataset = labels.map((value, idx) => [idx, value])
        }],
        template: `<select ng-model="input" ng-options="tuple[0] as tuple[1] for tuple in dataset"></select>`,
    }
}
