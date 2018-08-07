@id_8 @bestandskunde
Feature: Kundendaten verwalten Login
Als Bestandskunde möchte ich mich anmelden um zur Übersicht meines Accounts zu gelangen



Background:
    Given ist die WWZ Startseite

    Scenario Outline: Such nach PLZ ausserhalb Versorgungsbereich
    When ich "Meine WWZ" klicke
    And ich meine Nutzerdaten eingebe - <name>, <pwd>
    And ich "Einloggen" klicke
    Then sehe ich "Meine Übersicht"
    And erreiche ich meinen Nutzeraccount - <name>
    When ich "Meine WWZ" klicke
    And ich "Abmelden" klicke
    Then sehe ich "Abmelden"

    Examples:
            |name|pwd|
            |benjamin.stettler@wwz.ch|4000|
