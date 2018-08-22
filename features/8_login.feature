@id_8 @bestandskunde
Feature: Kundendaten verwalten Login
Als Bestandskunde möchte ich mich anmelden um zur Übersicht meines Accounts zu gelangen



Background:
    Given ist die WWZ Startseite

    Scenario Outline: Such nach PLZ ausserhalb Versorgungsbereich
    When ich mich anmelde - <name>, <pwd>
    Then sehe ich "Meine Übersicht"
    And befinde ich mich in meinem Nutzeraccount - <kundennummer>
    When ich mich abmelde
    Then sehe ich "Abmelden"
    And der Text "Sie haben sich erfolgreich abgemeldet" wird angezeigt

    Examples:
            |name|pwd|kundennummer|
            |"benjamin.stettler@wwz.ch"|"Check2data$"|"1234567"|
