@id_2 @strom
Feature: Informationen anzeigen und downloaden
Als potenzieller Neukunde möchte ich mich über Tarifzeiten, Preise und Herkunft informieren

Background:
    Given ist die WWZ Startseite
    When ich auf Produkte Strom klicke


    Scenario Outline: Informieren über Strompreise
        When ich die Liste <liste> öffne
        Then haben alle Einträge der Liste <liste> eine Verlinkung zur Info-PDF

     Examples:
             |liste|
             |"Preise 2018"|
             |"Preise 2017"|
             |"Herkunft"|