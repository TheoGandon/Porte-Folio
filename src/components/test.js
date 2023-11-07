import "../App.css";


function Menu() {
    return(
        <div className="wrapper">
            <head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"></link>
            </head>
        <div className="CardsNav">
            <a href="#Boissons">Boissons,Apéritifs et Cocktails</a>
            <a href="#Plats">Carte des Plats</a>
            <a href="#Desserts">Desserts</a>
            <a href="#Cave">Dans la cave</a>
        </div>
        <div className="CardsContainer">
            <div className="Cards">
                <h2>Boissons,Apéritifs et Cocktails</h2>
                <div className="Drinks">
                    <table id="Boissons">
                        <tr>
                            <td>Ricard</td>
                            <td>2 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Picon vin blanc</td>
                            <td>12 cl</td>
                            <td>6,00 €</td>
                        </tr>
                        <tr>
                            <td>Martini</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Porto blanc</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Marsala</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Pineau des Charentes</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Campari</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Suze</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Apérol</td>
                            <td>5 cl</td>
                            <td>5,00 €</td>
                        </tr>
                        <tr>
                            <td>Muscat</td>
                            <td>5 cl</td>
                            <td>4,00 €</td>
                        </tr>
                        <tr>
                            <td>Kir vin blanc</td>
                            <td>12 cl</td>
                            <td>5,00 €</td>
                            <td>Mûres, Casis, Pêche, Framboise, Violette</td>
                        </tr>
                    </table>
                    <h2>Alcools</h2>
                    <table>
                    <tr>
                        <td>Bacardi</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    <tr>
                        <td>Gin</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    <tr>
                        <td>Smirnoff</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    <tr>
                        <td>Malibu</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    <tr>
                        <td>Pissang</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    <tr>
                        <td>Tequila</td>
                        <td>4 cl</td>
                        <td>7,00 €</td>
                    </tr>
                    <tr>
                        <td>Bacardi</td>
                        <td>4 cl</td>
                        <td>8,00 €</td>
                    </tr>
                    </table>
                    <h2>Bières pressions</h2>
                    <table>
                    <tr>
                        <td>Pelforth</td>
                        <td>25 cl</td>
                        <td>3,50 €</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>50 cl</td>
                        <td>6,00 €</td>
                    </tr>
                    <tr>
                        <td>Affligem</td>
                        <td>25 cl</td>
                        <td>4,00 €</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>50 cl</td>
                        <td>7,00 €</td>
                    </tr>
                    <tr>
                        <td>Hapkin</td>
                        <td>33 cl</td>
                        <td>6,00 €</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>50 cl</td>
                        <td>10,00 €</td>
                    </tr>
                    <tr>
                        <td>Picon Bière</td>
                        <td>25 cl</td>
                        <td>4,50 €</td>
                    </tr>
                    <tr>
                        <td>Panaché, Monaco</td>
                        <td>25 cl</td>
                        <td>4,00 €</td>
                    </tr>
                    </table>
                    <h2>Bière bouteilles</h2>
                    <table>
                        <tr>
                            <td>Kasteel rouge</td>
                            <td>33 cl</td>
                            <td>5,50 €</td>
                        </tr>
                        <tr>
                            <td>Chimay</td>
                            <td>33 cl</td>
                            <td>5,50 €</td>
                        </tr>
                        <tr>
                            <td>Duvel</td>
                            <td>33 cl</td>
                            <td>5,50 €</td>
                        </tr>
                        <tr>
                            <td>Hoegaarden</td>
                            <td>33 cl</td>
                            <td>5,50 €</td>
                        </tr>
                    </table>
                    <h2>Chapagnes</h2>
                    <table>
                        <tr>
                            <td>Deutz AOP</td>
                            <td>13 cl</td>
                            <td>9,00 €</td>
                        </tr>
                    </table>
                    <h2>Cocktails</h2>
                    <table>
                        <tr>
                            <td>Moscow Mule</td>
                            <td>9,00 €</td>
                            <td>Vodla, citron, pimento</td>
                        </tr>
                        <tr>
                            <td>Moscow Mule Mangue ou Passion</td>
                            <td>9,00 €</td>
                            <td>Vodka Ciroc, citron jaune, Tonic Water</td>
                        </tr>
                        <tr>
                            <td>Mojito</td>
                            <td>9,00 €</td>
                        </tr>
                        <tr>
                            <td>Mojito framboise</td>
                            <td>9,00 €</td>
                        </tr>
                        <tr>
                            <td>Gin Fizz</td>
                            <td>9,00 €</td>
                        </tr>
                        <tr>
                            <td>Américano Maison</td>
                            <td>9,00 €</td>
                        </tr>
                        <tr>
                            <td>Coktail maison</td>
                            <td>9,00 €</td>
                        </tr>
                        <tr>
                            <td>Spritz</td>
                            <td>9,00 €</td>
                        </tr>
                    </table>
                    <h2>Cocktails sans alcool</h2>
                    <table>
                        <tr>
                            <td>Cocktail de jus de fruits</td>
                            <td>6,00 €</td>
                        </tr>
                        <tr>
                            <td>Virgin Mojito</td>
                            <td>6,50 €</td>
                        </tr>
                    </table>
                    <h2>Eaux</h2>
                    <table>
                    
    <tr>
      <td>Vittel</td>
      <td>4,00€</td>
      <td>50 cl</td>

    </tr>
    <tr>
      <td>Vittel</td>
      <td>6,00€</td>
      <td>1 L</td>
    </tr>
    <tr>
      <td>San Pellegrino</td>
      <td>San Pellegrino</td>
      <td>4,00€</td>
      <td>50 cl</td>
    </tr>
    <tr>
      <td>San Pellegrino</td>
      <td>6,00€</td>
      <td>1 L</td>
    </tr>
    </table>
    <h2>Softs</h2>
    <table>
    <tr>
      <td>Limonade</td>
      <td>3,50€</td>
      <td>25 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Jus de fruits</td>
      <td>3,50€</td>
      <td>25 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Coca-Cola</td>
      <td>3,50€</td>
      <td>33 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Coca-Cola Zéro</td>
      <td>3,50€</td>
      <td>33 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Fuze tea</td>
      <td>3,50€</td>
      <td>25 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Perrier</td>
      <td>3,50€</td>
      <td>25 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Schweppes Tonic</td>
      <td>3,50€</td>
      <td>25 cl</td>
      <td></td>
    </tr>
    </table>
    <h2>Rhums</h2>
    <table>
    <tr>
      <td>Zaccapa</td>
      <td>12,00€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Don Papa</td>
      <td>10,00€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Diplomatico</td>
      <td>10,00€</td>
      <td></td>
      <td></td>
    </tr>
    </table>
    <h2>Whiskies</h2>
    <table>
    <tr>
      <td>J&B</td>
      <td>8,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Jack Daniel’s</td>
      <td>8,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Aberlour 10 ans</td>
      <td>9,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Cardhu 12 ans</td>
      <td>9,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Knockando 12 ans</td>
      <td>9,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Talisker</td>
      <td>9,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Oban 14 ans</td>
      <td>9,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Dalwhinnie 15 ans</td>
      <td>10,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    <tr>
      <td>Lagavulin 16 ans</td>
      <td>12,00€</td>
      <td>4 cl</td>
      <td></td>
    </tr>
    </table>
    <h2>Un digestif ?</h2>
    <table>
    <tr>
      <td>Get 27</td>
      <td>8,00€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Get 31</td>
      <td>8,00€</td>
      <td></td>
      <td></td>
    </tr>
    </table>
    <h2>Avec boisson chaude ?</h2>
    <table>
    <tr>
      <td>Café</td>
      <td>2,20€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Café crème</td>
      <td>2,20€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Déca</td>
      <td>2,20€</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Irish Coffee</td>
      <td>9,00€</td>
      <td></td>
      <td></td>
    </tr>
    </table>
    <h2>PALAIS DES THÉS</h2>
    <table>
    <tr>
      <td>Lambini royale</td>
      <td>Thé noir Earl Grey grand parfum. Arôme Bergamote</td>
      <td>4,00€</td>
    </tr>
    <tr>
      <td>La route des Indes</td>
      <td>Thé noir de chine. Arômes de cerise, fraise, framboise et groseille. Hibiscus, pétales de rose, feuille de ronces</td>
      <td>4,00€</td>
    </tr>
    <tr>
      <td>Nuage d’himalaya</td>
      <td>Rooibos. Arôme naturel de vanille (sans théine)</td>
      <td>4,00€</td>
    </tr>
    <tr>
      <td>Jardin de gaya</td>
      <td>Thé vert sencha et chunmee de chine, Rooibos d’Afrique de sud. Arômes citron, caramel, fleurs. Morceaux de papaye et pétales de fleurs</td>
      <td>4,00€</td>
    </tr>
    <tr>
      <td>L’impérial Wu</td>
      <td>Thé menthe douce et menthe poivrée</td>
      <td>4,00€</td>
    </tr>
    <tr>
      <td>Fleurs de Nara</td>
      <td>Thé jasmin vert supérieur</td>
      <td>4,00€</td>
    </tr>
</table>
<h2>Carte des Plats</h2>
  <h2 id="Plats">Suggestion du jour</h2>
  <table>
      <tr>
        <td>Entrée du jour</td>
        <td>Quiche courgettes/ saumon fumé</td>
        <td>7,00€</td>
      </tr>
    <tbody>
      <tr>
        <td>PLAT DU JOUR</td>
        <td>Salade d’agneau et épeautre, vinaigrette citron menthe</td>
        <td>16,00€</td>
      </tr>
      <tr>
        <td>DESSERT DU JOUR</td>
        <td>Gâteau au chocolat Ou tiramissu café</td>
        <td>7,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>A l'heure de l'apéro</h2>
  <table>
      <tr>
        <td>Fuet</td>
        <td>6,00€</td>
        <td>1/2</td>
        <td>12,00€</td>
        <td>Entier</td>
      </tr>
  </table>

  <h2>Entrées</h2>
  <table>
      <tr>
        <td>Assiette à partager</td>
        <td>9,00€ / Pers</td>
      </tr>
    <tbody>
      <tr>
        <td>Saint Marcelin pané</td>
        <td>8,00€</td>
      </tr>
      <tr>
        <td>Asperges vertes grillées, œuf poché crème de basilic</td>
        <td>10,00€</td>
      </tr>
      <tr>
        <td>Cassolette d’escargots gratinées au Maroilles</td>
        <td>10,00€</td>
      </tr>
      <tr>
        <td>Pithiviers de joue de bœuf et os à moelle</td>
        <td>11,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>Plats</h2>
  <table>
    <tbody>
      <tr>
        <td>Emincé de poulet gratiné au Maroilles</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Conchiglioni au chèvre</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Tartare de boeuf</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Hampe de cheval en persillade</td>
        <td>22,00€</td>
      </tr>
      <tr>
        <td>Bavette Angus sauce échalotes</td>
        <td>24,00€</td>
      </tr>
      <tr>
        <td>Pavé de filet de rumsteck. sauce au poivre</td>
        <td>24,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>Poissons</h2>
  <table>
    <tbody>
      <tr>
        <td>Filet de dorade aux champignons</td>
        <td>24,00€</td>
      </tr>
      <tr>
        <td>Gambas à là diable</td>
        <td>25,00€</td>
      </tr>
      <tr>
        <td>Mi cuit de thon rouge, aubergines et sauce miso</td>
        <td>26,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>Salades</h2>
  <table>
    <tbody>
      <tr>
        <td>Salade de croquettes de Maroilles</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Salade César</td>
        <td>20,00€</td>
      </tr>
      <tr>
        <td>Salade de croquettes de crevettes grises</td>
        <td>25,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>Menu enfant</h2>
  <table>
    <tbody>
      <tr>
        <td>Plat + Dessert</td>
        <td>12,00€</td>
      </tr>
    </tbody>
  </table>

  <h2>Supplément Garniture</h2>
  <table>
    <tbody>
      <tr>
        <td>Frites maison</td>
        <td>2,00€</td>
      </tr>
      <tr>
        <td>Poêlée de légumes de saison</td>
        <td>3,00€</td>
      </tr>
    </tbody>
  </table>
  <h2>Et une douceur</h2>
  <table id="Desserts">
    <tbody>
      <tr>
        <td>Tarte au citron meringuée</td>
        <td>8,00€</td>
      </tr>
      <tr>
        <td>Crème brûlée vanille</td>
        <td>8,00€</td>
      </tr>
      <tr>
        <td>Tiramisu café</td>
        <td>8,00€</td>
      </tr>
      <tr>
        <td>Coeur coulant au chocolat</td>
        <td>9,00€</td>
      </tr>
      <tr>
        <td>Salade de fruits frais</td>
        <td>9,00€</td>
      </tr>
      <tr>
        <td>Pavlova aux fraises</td>
        <td>9,00€</td>
      </tr>
      <tr>
        <td>Café gourmand</td>
        <td>10,00€</td>
      </tr>
      <tr>
        <td>Thé gourmand</td>
        <td>10,50€</td>
      </tr>
    </tbody>
  </table>

  <h2>Ou une glace ?</h2>
  <table>
    <tbody>
      <tr>
        <td>Colonel</td>
        <td></td>
        <td>9,00€</td>
      </tr>
      <tr>
        <td>Coupe de sorbets / glaces : 3 parfums au choix</td>
        <td>Citron, framboise, mangue, fraise, vanille, chocolat, caramel, café</td>
        <td>6,50€</td>
      </tr>
      <tr>
        <td>Dame Blanche</td>
        <td>Glace vanille, chocolat chaud et chantilly</td>
        <td>7,50€</td>
      </tr>
      <tr>
        <td>Chocolat Liégeois</td>
        <td>Glace chocolat, chocolat chaud et chantilly</td>
        <td>7,50€</td>
      </tr>
      <tr>
        <td>Café Liégeois</td>
        <td>Glace café, café et chantilly</td>
        <td>7,50€</td>
      </tr>
    </tbody>
  </table>
  </div>
</div>

        </div>
        </div>
    );
}

export default Menu;

