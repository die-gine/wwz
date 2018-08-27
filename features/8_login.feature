@id_8 @bestandskunde
Feature: Kundendaten verwalten Login
Als Bestandskunde möchte ich mich anmelden um zur Übersicht meines Accounts zu gelangen



Background:
    Given ist die WWZ Startseite

    Scenario Outline: Login/Logout als Bestandskunde
    When ich mich anmelde - <name>, <pwd>
    Then sehe ich den Titel "Meine Übersicht"
    And befinde ich mich in meinem Nutzeraccount - <kundennummer>
    When ich mich abmelde
    Then sehe ich den Titel "Abmelden"
    And der Text "Sie haben sich erfolgreich abgemeldet" wird angezeigt

    Examples:
            |name|pwd|kundennummer|
            |"benjamin.stettler@wwz.ch"|"Check2data$"|"1234567"|