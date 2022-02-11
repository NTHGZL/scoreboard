const scoreboard = document.getElementById('scoreboard')
const todayscore = document.getElementById('scoreoftheday')
const gamescount = document.getElementById('gamescount')
const URL = "https://api-scoreboard.nathangonzalez.fr"
const DEV = "http://localhost:3000"


window.fetch(URL+'/api/games/count')
.then(res => res.json())
.then(result => gamescount.append(result))



// _______________________________________________________________________________________
let scores = '';
    
const table = document.createElement('table')
const thead = document.createElement('thead')
const thRank = document.createElement('th')
const thPseudo = document.createElement('th')
const thScore = document.createElement('th')
const thDate = document.createElement('th')

thRank.append('#')
thPseudo.append('Pseudo')
thScore.append('Score')
thDate.append('Date')

thead.append(thRank)
thead.append(thPseudo)
thead.append(thScore)
thead.append(thDate)

table.append(thead)
const tbody = document.createElement('tbody')

function setScores(res) {
    scores = res
}


    window.fetch(URL+"/api/score")
    .then(res => res.json())
    .then(result => {
        let i =1;
        result.forEach(element => {
            const tr = document.createElement('tr')
            const rank = document.createElement('td')
            rank.classList = 'rank'
            const pseudo = document.createElement('td')
            const score = document.createElement('td')
            const date = document.createElement('td')
            const scoreDate = new Date(element.createdAt).toLocaleDateString()

            rank.append('#'+i)
            pseudo.append(element.pseudo)
            score.append(element.score)
            date.append(scoreDate)
            tr.append(rank)
            tr.append(pseudo)
            tr.append(score)
            tr.append(date)
            
            tbody.append(tr)
            i++
        });
        table.append(tbody)
        scoreboard.append(table)
    })
    .catch(e => console.error(error))


let scoresToday = '';
    

const tableToday = document.createElement('table')
const theadToday = document.createElement('thead')
const thRankToday = document.createElement('th')
const thPseudoToday = document.createElement('th')
const thScoreToday = document.createElement('th')
const thDateToday = document.createElement('th')

thRankToday.append('#')
thPseudoToday.append('Pseudo')
thScoreToday.append('Score')
thDateToday.append('Date')

theadToday.append(thRankToday)
theadToday.append(thPseudoToday)
theadToday.append(thScoreToday)
theadToday.append(thDateToday)

tableToday.append(theadToday)
const tbodyToday = document.createElement('tbody')

    window.fetch(URL+"/api/score/today")
    .then(res => res.json())
    .then(result => {
        let i =1;
        result.forEach(element => {
            const tr = document.createElement('tr')

            const rank = document.createElement('td')
            rank.classList = 'rank'
            const pseudo = document.createElement('td')
            const score = document.createElement('td')
            const date = document.createElement('td')
            const scoreDate = new Date(element.createdAt).toLocaleDateString()

            rank.append('#'+i)
            pseudo.append(element.pseudo)
            score.append(element.score)
            date.append(scoreDate)

            tr.append(rank)
            tr.append(pseudo)
            tr.append(score)
            tr.append(date)
            
            tbodyToday.append(tr)
            i++
        });
        tableToday.append(tbodyToday)
        todayscore.append(tableToday)
    })
    .catch(e => console.error(error))




class Score {
    /**
     * @type string
     */
    pseudo

    /**
     * @type number
     */
    score

    constructor(score, pseudo){
        this.pseudo = pseudo
        this.score = score
    }
}
