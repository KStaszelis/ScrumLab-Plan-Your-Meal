import React from "react";

const InProgress =()=>{

    return (
        <div className="inProgress-section" id="why">
            <div className="bar">
                <img className="icon" src="./images/check-mark-3-32.png"></img>
            <h3 className="h3-grey">Zbilansowane menu</h3>
                <p>Możesz określić, ile w danym posiłku zjesz białka, ile warzyw itp. Dzięki temu łatwiej będzie Ci nie dopuścić do niedoborów składników odżywczych i witamin. Unikasz więc problemów ze zdrowiem, a co za tym idzie – oszczędzasz na kosztach leczenia.</p>
            </div>
            <div className="bar">
                <img className="icon" src="./images/clock-3-32.png"></img>
                <h3 className="h3-grey">Oszczędność czasu i pieniędzy</h3>
                <p>Nie kupujesz przypadkowych produktów, bo dokładnie wiesz, po co idziesz do sklepu, czego szukasz i ile szacunkowo będzie Ciebie to kosztować. Nie marnujesz jedzenia - więc nie wyrzucasz pieniędzy do kosza!</p>
            </div>
            <div className="bar">
                <img className="icon" src="./images/menu_grey_36x36.png"></img>
                <h3 className="h3-grey">Dbanie o zdrowie i linię</h3>
                <p>Unikasz kupowania gotowych dań na mieście. Restauracyjne porcje nie tylko są zwykle bardzo drogie, ale i zdecydowanie za duże! Bardzo często są też okraszone zawiesistymi sosami, co w połączeniu z nadmiarem węglowodanów przemyca niepotrzebne kalorie.</p>
            </div>
        </div>
    )
}

export default InProgress;
