function renderUnlinkedCard(classes, date, emoji) {
    var template = document.getElementById('unlinked-card').innerHTML;
    var data = {
        class: classes,
        date: date,
        emoji: emoji
    }
    var html = Mustache.render(template, data);
    return html;
}

function renderLinkedCard(classes, link, date, emoji) {
    var template = document.getElementById('linked-card').innerHTML;
    var data = {
        class: classes,
        link: link,
        date: date,
        emoji: emoji
    }
    var html = Mustache.render(template, data);
    return html;
}

function renderBody() {
    var links = [
        "https://drive.google.com/file/d/19gOQUpb8dHw02oHKEwv1nZk7FMQEWWf9/view"
    ]

    var d = new Date();
    var date = d.getDate();
    var month = d.getMonth();
    var year = d.getFullYear();

    // If it's before April, all cards will be unlinked.
    if (month < 3) date = 0;

    if (year == 2021) {
        var cards_row0 = [
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "28", "💃"),
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "29", "💃"),
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "30", "💃"),
            renderUnlinkedCard("card text-white bg-dark mb-3 ", "31", "💃"),
        ];
        for (i = 1; i < 4; i++) {
            if (i < date) {
                cards_row0.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row0.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row0.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row1 = [];
        for (i = 4; i < 11; i++) {
            if (i < date) {
                cards_row1.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row1.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row1.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row2 = [];
        for (i = 11; i < 18; i++) {
            if (i < date) {
                cards_row2.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row2.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row2.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row3 = [];
        for (i = 18; i < 25; i++) {
            if (i < date) {
                cards_row3.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row3.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row3.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        var cards_row4 = [];
        for (i = 25; i < 28; i++) {
            if (i < date) {
                cards_row4.push(renderLinkedCard("card bg-light mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "🎉"));
            } else if (i == date) {
                cards_row4.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none", links[i - 1], i.toString(), "❤️"));
            } else {  // i > date
                cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", i.toString(), "🤫"));
            }
        }
        if (date == 28) {
            cards_row4.push(renderLinkedCard("card text-white bg-warning mb-3 stretched-link text-decoration-none rainbow-box", links[i - 1], "28", "❤️"));
        } else {
            cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3 rainbow-box", "28", "🤫"));
        }
        cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", "29", "💃"));
        cards_row4.push(renderUnlinkedCard("card text-white bg-secondary mb-3", "30", "💃"));
        cards_row4.push(renderUnlinkedCard("card text-white bg-dark mb-3", "1", "💃"));
    } else {
        //TODO
    }

    document.getElementById('row-0').innerHTML = cards_row0.join();
    document.getElementById('row-1').innerHTML = cards_row1.join();
    document.getElementById('row-2').innerHTML = cards_row2.join();
    document.getElementById('row-3').innerHTML = cards_row3.join();
    document.getElementById('row-4').innerHTML = cards_row4.join();
}