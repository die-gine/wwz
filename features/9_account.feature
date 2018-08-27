@id_9 @bestandskunde
Feature: Kundendaten verwalten Account Übersicht
Als Bestandskunde kann ich auf der Übersicht Bezugsorte, Rechnungen, Produkte und Verbrauch einsehen. Je nach Auswahl des Kontos werden in der Rechnungsübersicht entsprechende Rechnungen angezeigt.



Background:
    Given ist die WWZ Startseite

    Scenario Outline: Account Übersicht einsehen, Bezugsort und Konto mit Rechnungen prüfen
    When ich mich als Testnutzer anmelde
    Then sehe ich meinen Bezugsort <bezugsort>
    When ich mein Vertragskonto <konto1> wähle
    Then sehe ich meine letzte Rechnung vom <rechnung>

    Examples:
            |bezugsort|konto1|rechnung|konto2|
            |"Chollerstrasse 24, 6300 Zug"|"3062733"|"29.10.2015"|"3062735"|


    Scenario Outline: Account Übersicht einsehen, Bezugsort und Konto Rechnungsübersicht ohne Rechnungen prüfen
    When ich mich als Testnutzer anmelde
    Then sehe ich meinen Bezugsort <bezugsort>
    When ich mein Vertragskonto <konto2> wähle
    And ich zur Rechnungsübersicht navigiere
    Then sehe ich die Meldung "Es liegen keine Rechnungen vor."

        Examples:
                |bezugsort|konto1|rechnung|konto2|
                |"Chollerstrasse 24, 6300 Zug"|"3062733"|"29.10.2015"|"3062735"|