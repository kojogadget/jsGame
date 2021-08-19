#! python3

########################################################################################################################
#################################################SAMLING AV KODER#######################################################
########################################################################################################################

############################### Import

import random

############################### Lister

# Oversikt over programmer
program  =  ['1: Tic Tac Toe', '2: Inventory Check', '3: Magic 8 Ball', '4: Bursdager', '5: Collatz', '6: Gjett tallet', '7: Tegning']

# Inventory Check

dragonLoot = ['gold', 'gold', 'ruby', 'sword', 'gold', 'keys', 'ruby']

# Magic 8 Ball

spydigeSvar  =  ['Ikke sånn som du ser ut i dag...', 'Ta deg en runde.', 'Ja!', 'Nei..', 'Dårlig spørsmål..next!',
                 'Vi får se.', 'Kanskje det.', 'Vil du heller ha en klem?', 'Tenk deg om..', 'Hysj', 'Æsj!',
                 'Hva mener du egentlig? Dumme jævel..', 'k']


# Tegningen av hjertet
tegningAvHjerte = [['.', '.', '.', '.', '.', '.'],
                   ['.', '0', '0', '.', '.', '.'],
                   ['0', '0', '0', '0', '.', '.'],
                   ['0', '0', '0', '0', '0', '.'],
                   ['.', '0', '0', '0', '0', '0'],
                   ['0', '0', '0', '0', '0', '.'],
                   ['0', '0', '0', '0', '.', '.'],
                   ['.', '0', '0', '.', '.', '.'],
                   ['.', '.', '.', '.', '.', '.']]


############################### Dicts

# Tic Tac Toe

etBrett = {'t1': ' ', 't2': ' ', 't3': ' ',
           'm1': ' ', 'm2': ' ', 'm3': ' ',
           'b1': ' ', 'b2': ' ', 'b3': ' '} 

# Inventory  Check

inv = {'gold': 167, 'arrows': 43, 'potions': 18, 'bedrool': 1, 'shovel': 1, 'keys': 4}

# Bursdag

bursdag = {'Pernille': '29.august', 'Kjartan': '24.januar', 'Elisabeth': '29.april', 'Knut': '03.mars',
           'Silje': '03.november', 'Martine': '30.juli', 'Janne': '14.oktober', 'Steffan': '20.mars'}

############################### Variabler

# Globale variabler
navn = 'ukjent navn'
valg = ' '
passord = 'prikken'


############################### Funksjoner
def fortsett():
    print()
    print()
    print('-' , end='')
    fortsett = input()
    print()
    print()
    print()

    if fortsett.lower() == 'exit':
        sys.exit()


############################################################## Tic Tac Toe ##############################################################

brett_keys = []

for key in etBrett:
    brett_keys.append(key)

def printBrett(brett):
    print(brett['t1'] + '|' + brett['t2'] + '|' + brett['t3'] + ' t')
    print('-+-+-')
    print(brett['m1'] + '|' + brett['m2'] + '|' + brett['m3'] + ' m')
    print('-+-+-')
    print(brett['b1'] + '|' + brett['b2'] + '|' + brett['b3'] + ' b')
    print()
    print('1 2 3')


def spill_TTT():

    tur = 'X'
    tell = 0

    while tell <= 9:
        printBrett(etBrett)
        print()
        print('Det er ' + tur + ' sin tur. Hvilken rute velger du?')

        rute = input()

        try:

            if rute.lower() == 'slutt':
                break
            elif rute.lower() == 'exit':
                sys.exit()
            elif etBrett[rute] == ' ':
                etBrett[rute] = tur
                tell += 1
            else:
                print()
                print('Denne ruten er allerede tatt...')
                continue

            if tell >= 5:
                if etBrett['t1'] == etBrett['t2'] == etBrett['t3'] != ' ':     # rekke på toppen
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** ' + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['m1'] == etBrett['m2'] == etBrett['m3'] != ' ':     # rekke på midten
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** ' + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['b1'] == etBrett['b2'] == etBrett['b3'] != ' ':     # rekke på bunn
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** ' + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['t1'] == etBrett['m1'] == etBrett['b1'] != ' ':     # rekke ned venstre
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** ' + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['t2'] == etBrett['m2'] == etBrett['b2'] != ' ':     # rekke ned midten
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** ' + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['t3'] == etBrett['m3'] == etBrett['b3'] != ' ':     # rekke ned høyre
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** '  +  tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['t1'] == etBrett['m2'] == etBrett['b3'] != ' ':     # rekke diagonalt 1
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** '  + tur + ' har vunnet! ****')
                    print()
                    break
                elif etBrett['t3'] == etBrett['m2'] == etBrett['b1'] != ' ':     # rekke diagonalt 2
                    printBrett(etBrett)
                    print()
                    print('Game over:')
                    print(' **** '  + tur + ' har vunnet! ****')
                    print()
                    break

            if tell == 9:
                printBrett(etBrett)
                print()
                print('Game over:')
                print(' **** UAVGJORT ****')
                print()
                break

            if tur == 'X':
                tur = 'O'
            else:
                tur = 'X'

        except KeyError:
            print()
            print('****  Dette var ikke en rute. Prøv igjen:  ****')
            print()
            
    for key in brett_keys: 
        etBrett[key] = ' '

    if rute.lower() != 'slutt':
        while True:
            print()
            omkamp = input('Omkamp? (j/n)')
            if omkamp.lower() == 'j' or omkamp.lower() == 'ja':
                print()
                spill_TTT()
                break
            elif omkamp.lower() == 'slutt' or omkamp.lower() == 'n' or omkamp.lower() == 'nei':
                break
            elif omkamp.lower() == 'exit':
                sys.exit()
            else:
                print()
                print('**** Ugyldig kommando ****')

    fortsett()
                
        
############################################################## Inventory Check ##############################################################

def visInv(inv):
    print()
    print('Inventory:')
    
    antall_ting = 0

    for k, v in inv.items():
        print(str(v) + ' ' + str(k))
        antall_ting += v
    print()
    print('Totalt har du ' + str(antall_ting) + ' ting.')


def gi_inv(inventory, loot):
    for i in loot:
        if i in inventory:
            inventory[i] += 1
        else:
            inventory[i] = 1


def inventoryCheck():
    print()
    print('''I denne modusen kan du kun sjekke hva du har i sekken, og ta tingene til dragen.
Skriv "sjekk" for å se hva du har i sekken.
Skriv "loot" for a ta tingene til dragen.''')

    while True:
        print()
        kommando = input()

        if kommando.lower() ==  'sjekk':
            visInv(inv)
        elif kommando.lower() == 'loot':
            gi_inv(inv, dragonLoot)
        elif kommando.lower() == 'slutt':
            break
        elif kommando.lower() == 'exit':
            sys.exit()
        else:
            print()
            print(' **** Ugyldig kommando ****')

    


############################################################## Magic 8 Ball ##############################################################
def magic8ball():
    while True:
        print()
        print('Spør meg:')
        print()
        spørsmål = input()

        if spørsmål == '' or spørsmål == spørsmål.isspace():
            print()
            print('Du må skrive noe for at jeg skal svare da...')
            continue
        elif spørsmål.lower() == 'slutt':
            break
        elif spørsmål.lower() == 'exit':
            sys.exit()
        else:
            print(spydigeSvar[random.randint(0, 12 )])

    fortsett()


############################################################## Bursdag ##############################################################

def bursdager():
    while True:

        omstart = ''
        oppdater = ''
        bdag = ''

        print()
        print('Hvem ønsker du å vite bursdagen til?')
        print()

        navn = input()

        if navn == '' or navn == navn.isspace():
            print()
            print('Du har ikke skrevet noe.. Prøv igjen:')
        elif navn.lower() == 'slutt':
            break
        elif navn.lower() == 'exit':
            sys.exit()

        navn = navn.title()

        if navn in bursdag:
            print()
            print('%s er bursdagen til %s.' % (bursdag[navn], navn))
            print()
        else:
            while True:
                print()
                print('Jeg kan ikke bursdagen til ' + navn + '...')

                oppdater = input('Kan du bursdagen til ' + navn + '? (j/n)')

                if oppdater.lower() == 'j' or oppdater.lower() == 'ja':
                    
                    print()
                    print('Hva er bursdagen til ' + navn + '?')

                    bdag = input()

                    if bdag.lower() == 'slutt':
                        break
                    elif bdag.lower() == 'exit':
                        sys.exit()
                    
                    bursdag[navn] = bdag

                    print()
                    print('Da er listen oppdatert. Takk!')
                    print()
                    
                    break
                
                elif oppdater.lower() == 'slutt':
                    break
                elif oppdater.lower() == 'exit':
                    sys.exit()
    
                elif oppdater.lower() == 'n' or oppdater.lower() == 'nei':
                    while True:
                        print()
                        omstart = input('Ønsker du å søke på noen andre i listen? (j/n)')
                        print()

                        if omstart.lower() == 'j' or omstart.lower() == 'ja':
                            break
                        elif omstart.lower() == 'n' or omstart.lower() == 'nei' or omstart.lower() == 'slutt':
                            break
                        elif omstart.lower() == 'exit':
                            sys.exit()
                        else:
                            print(' **** Ugyldig kommando ****')
                else:
                    print(' **** Ugyldig kommando ****')


                if omstart.lower() == 'n' or omstart.lower() == 'nei' or omstart.lower() == 'slutt' or omstart.lower() == 'j' or omstart.lower() == 'ja':
                    break


        if omstart.lower() == 'j' or omstart.lower() == 'ja':
            continue
        elif omstart.lower() == 'n' or omstart.lower() == 'nei' or omstart.lower() == 'slutt' or oppdater.lower() == 'slutt' or bdag.lower() == 'slutt':
            break
        else:
            while True:
                print()
                omstart = input('Ønsker du å søke på noen andre i listen? (j/n)')
                print()

                if omstart.lower() == 'j' or omstart.lower() == 'ja':
                    break
                elif omstart.lower() == 'n' or omstart.lower() == 'nei' or omstart.lower() == 'slutt':
                    break
                elif omstart.lower() == 'exit':
                    sys.exit()
                else:
                    print(' **** Ugyldig kommando ****')

        if omstart.lower() == 'n' or omstart.lower() == 'nei' or omstart.lower() == 'slutt':
            break
                

    fortsett()
    

############################################################## Collatz ##############################################################

def collatz():


    while True:

        try:

            forslag = input()

            if forslag.lower() == 'slutt':
                break
            elif forslag.lower() == 'exit':
                sys.exit()

            forslag = int(forslag)

            while forslag != 1:

                if forslag % 2 == 0:
                    forslag = forslag // 2
                    print(forslag)
                else:
                    forslag = forslag * 3 + 1
                    print(forslag)

        except ValueError:
            print()
            print('Dette er ikke et tall. Prøv igjen:')
            print()
            continue

        if forslag == 1:
            while True:
                print()
                omkamp = input('Ønsker du å prøve igjen? (j/n)')
                if omkamp.lower() ==  'j' or omkamp.lower() == 'ja':
                    print()
                    print('Hvilket tall øsnker du å prøve nå?')
                    print()
                    collatz()
                    break
                elif omkamp.lower() == 'exit':
                    sys.exit()
                elif omkamp.lower() == 'slutt' or omkamp.lower() == 'n' or omkamp.lower() == 'nei':
                    break
                else:
                    print()
                    print('**** Ugyldig kommando ****')

        if omkamp.lower() == 'slutt' or omkamp.lower() == 'n' or omkamp.lower() == 'nei':
            break

    fortsett()

def collatz_intro():
    print('''
Velkommen, %s, til matematikkens enkleste umulige problem!
Dersom du gir meg et tall vil jeg ta det tallet gjennom et regnestykke hvor tallet vil ende opp med å bli 1, uansett hvilket tall du gir meg. Regnestykket er å dividere alle partall på 2 og avrunde til nærmeste heltall.
Oddetall vil bli multiplisert med 3 og så addert med 1.

Prøv det ut selv:
''' % (navn))

    collatz()
        

############################################################## Gjett tallet ##############################################################

def gjettTallet():

    hemmeligTall = random.randint(1, 20)
    print()
    print('Jeg tenker på et tall mellom 1 og 20. Klarer du å gjette tallet på 6 forsøk?')
    print()

    tell = 1

    while tell <= 6:
        
        try:
            gjett = input()

            if gjett.lower() == 'slutt':
                break
            elif gjett.lower() == 'exit':
                sys.exit()

            gjett = int(gjett)
      
            if gjett < hemmeligTall:
                print()
                print('Det var for lite.. Prøv igjen:')
                print()
                tell += 1
            elif gjett > hemmeligTall:
                print()
                print('Det var for mye.. Prøv igjen:')
                print()
                tell += 1
            else:
                break
            
        except ValueError:     
                print()
                print('Dette er ikke et tall. Prøv igjen:')
                print()
                continue

    gjett = str(gjett)

    if int(gjett) == hemmeligTall:
        print()
        print('Riktig! Du klarte det på ' + str(tell) + ' forsøk.')
        print()
    elif gjett.lower() == 'slutt':
        print()
    else:
        print()
        print('Beklager.  Tallet jeg tenkte på var ' + str(hemmeligTall) + '.')
        print()

    while True:
        if gjett.lower == 'slutt':
            break
        
        print()
        omkamp = input('Vil du prøve igjen? (j/n)')
        if omkamp.lower() == 'j' or omkamp.lower() == 'ja':
            print()
            gjettTallet()
            break
        elif omkamp.lower() == 'slutt' or omkamp.lower() == 'n' or omkamp.lower() == 'nei':
            break
        elif omkamp.lower() == 'exit':
            sys.exit()
        else:
            print()
            print('**** Ugyldig kommando ****')

    fortsett()


############################################################## Tegningen av hjertet ##############################################################
def tegnHjerte():
    rekke = 0
    while rekke < 6:
        for i in range(0, 8):
            print(tegningAvHjerte[i][rekke] , end=' ')
        print(tegningAvHjerte[8][0])
        rekke += 1


def gjettTegning():
    while True:
        print()
        print('Hva ønsker du jeg skal tegne for deg, %s?' % (navn))
        print()
        tell = 1
        while True:
            tegn = input()

            if tegn.lower() == 'hjerte':
                tegnHjerte()
                break
            elif  tell  == 3:
                break
            elif tegn.lower() == 'slutt':
                break
            elif tegn.lower() ==  'exit':
                sys.exit()
            else:
                print()
                print('Jeg kan ikke tegne det. Prøv noe annet: ')
                tell += 1

        if tegn.lower() == 'hjerte':
            break
        elif tegn.lower() == 'slutt':
            break
        else:
            print('Du skal få slippe å gjette hva jeg kan tegne. Jeg ville bare vise deg et hjerte:')
            print()
            tegnHjerte()
            break
        

def tegning():
    while True:
        if navn.lower() == 'pernille':
            gjettTegning()
        else:
            tell = 1
            while tell <= 3:
                print('Passord: ' , end=' ')
                skrivPassord = input()
            
                if skrivPassord == passord:
                    gjettTegning()
                    break
                elif skrivPassord.lower() == 'slutt':
                    break
                elif skrivPassord.lower() == 'exit':
                    sys.exit()
                else:
                    print('Feil passord...')
                    print()
                    tell += 1

            if skrivPassord.lower() == 'slutt':
                break
            elif skrivPassord != passord:
                print('Hvis du ikke kan passordet så gidder jeg ikke tegne for deg...')
                print()

            
        if navn.lower() == 'pernille':
            print()
            print('Jeg elsker deg, Pernille!')
            print()
            break
        else:
            break

    fortsett()


########################################################################################################################
################################################### Programmet #########################################################
########################################################################################################################

print(' **** I dette programmet kan du til en hver tid skrive "exit" for å avslutte. ****')
print()
print()

############################### Introduksjon av bruker
print('Hei! Hva er ditt navn?')
while True:
    navn  = input()
    print()

    if navn == '' or navn == navn.isspace():
        print('Du har ikke skrevet et navn. Prøv igjen: ')
    elif navn.lower() == 'exit':
        sys.exit()
    else:
        break

############################### Valg av program
print('Velkommen, ' + navn + '''! Dette programmet har forskjellige moduser du kan velge mellom.
Du kan når som helst skrive "slutt" for å avbryte modusen.''')

fortsett()

while True:

    for i in program:
        print(i)

    print()
    print('Hvilken modus ønsker du å kjøre?')
    print()
    valg = input()
    print()


############################### 1: Tic Tac Toe

    if valg == '1':
        spill_TTT()


############################### 2: Inventory Check

    if valg == '2':
        inventoryCheck()


############################### 3: Magic 8 Ball

    if valg == '3':
        magic8ball()


############################### 4: Bursdager

    if valg == '4':
        bursdager()


############################### 5: Collatz

    if valg == '5':
        collatz_intro()


############################### 6: Gjett tallet

    if valg == '6':
        gjettTallet()

        
############################### 7: Tegning
    
    if valg == '7':
        tegning()


############################### Exit

    if valg.lower() == 'exit':
        sys.exit()


    else:
        print('**** Ugyldig kommando ****')
        print()



