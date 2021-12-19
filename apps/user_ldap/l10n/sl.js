OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Čiščenje preslikav je spodletelo.",
    "Failed to delete the server configuration" : "Brisanje nastavitev strežnika je spodletelo.",
    "Invalid configuration: Anonymous binding is not allowed." : "Neveljavne nastavitve: brezimne vezi niso dovoljene.",
    "Valid configuration, connection established!" : "Veljavne nastavitve: povezava je vzpostavljena!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Veljavne nastavitve, a je povezava vseeno spodletela: preverite nastavitve strežnika in poverila.",
    "Invalid configuration. Please have a look at the logs for further details." : "Neveljavne nastavitve: za več podrobnosti si oglejte dnevniške zapise.",
    "No action specified" : "Ni določenega dejanja",
    "No configuration specified" : "Ni določenih nastavitev",
    "No data specified" : "Ni navedenih podatkov",
    " Could not set configuration %s" : "Ni mogoče uveljaviti nastavitev %s",
    "Action does not exist" : "Dejanje ne obstaja",
    "Renewing …" : "Poteka ponastavljanje ...",
    "Very weak password" : "Zelo šibko geslo",
    "Weak password" : "Šibko geslo",
    "So-so password" : "Slabo geslo",
    "Good password" : "Dobro geslo",
    "Strong password" : "Odlično geslo",
    "The Base DN appears to be wrong" : "Enoznačno ime (DN) podatkovne zbirke je napačno",
    "Testing configuration…" : "Poteka preizkušanje nastavitev ...",
    "Configuration incorrect" : "Nastavitev ni ustrezna",
    "Configuration incomplete" : "Nastavitev je nepopolna",
    "Configuration OK" : "Nastavitev je ustrezna",
    "Select groups" : "Izbor skupin",
    "Select object classes" : "Izbor razredov predmeta",
    "Please check the credentials, they seem to be wrong." : "Preverite poverila! Najverjetneje so napačna.",
    "Please specify the port, it could not be auto-detected." : "Določiti je treba ustrezna vrata, ker jih ni mogoče samodejno zaznati.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Osnovnega enoznačnega imena (DN) ni mogoče samodejno zaznati. Preverite poverila ter nastavitve gostitelja in vrat.",
    "Could not detect Base DN, please enter it manually." : "Ni mogoče zaznati osnovnega enoznačnega imena (DN). Vnesti ga bo treba ročno.",
    "{nthServer}. Server" : "{nthServer}. strežnik",
    "No object found in the given Base DN. Please revise." : "Ni najdenega predmeta v osnovnem enoznačnem imenu (DN). Preverite nastavitve.",
    "More than 1,000 directory entries available." : "Na voljo je več kot 1000 vnosov imenika",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["{objectsFound} vnos, ki je na voljo znotraj razpoložljivega osnovnega enoznačnega imena (Base DN)","{objectsFound} vnosa, ki sta na voljo znotraj razpoložljivega osnovnega enoznačnega imena (Base DN)","{objectsFound} vnosi, ki so na voljo znotraj razpoložljivega osnovnega enoznačnega imena (Base DN)","{objectsFound} vnosov, ki so na voljo znotraj razpoložljivega osnovnega enoznačnega imena (Base DN)"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Prišlo je do napake. Preverite osnovno enoznačno ime, nastavitve povezave in poverila.",
    "Do you really want to delete the current Server Configuration?" : "Ali res želite izbrisati trenutne nastavitve strežnika?",
    "Confirm Deletion" : "Potrdi brisanje",
    "Mappings cleared successfully!" : "Preslikave so uspešno počiščene!",
    "Error while clearing the mappings." : "Napaka pri čiščenju preslikav.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Brezimne vezave niso dovoljene. Navedeno mora biti uporabniško enoznačno ime (DN) in geslo.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Napaka opravila LDAP: brezimne povezave morda niso dovoljene.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Shranjevanje je spodletelo. Prepričajte se, da je dostop do podatkovne zbirke omogočen. Pred nadaljevanjem je treba stran osvežiti.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Preklop načina omogoči samodejne poizvedbe LDAP. Glede na velikost je lahko opravilo dolgotrajno. Ali res želite preklopiti način?",
    "Mode switch" : "Preklop načina",
    "Select attributes" : "Izbor atributov",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Uporabnika ni mogoče najti. Preverite atribute prijave in uporabniško ime. Učinkovit filter (za kopiranje overitve ukazne vrstice): <br/>",
    "User found and settings verified." : "Uporabnik je najden in nastavitve so overjene.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Razmislite o zoženju iskalnega niza, saj trenutni opredeljuje večje število uporabnikov, med katerimi je le prvi na voljo za prijavo.",
    "An unspecified error occurred. Please check log and settings." : "Prišlo je do nedoločene napake: preverite dnevnik in nastavitve.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Filter iskanja ni veljaven. Najverjetneje je to zaradi napake skladnje, kot je neustrezno ali neskladno uporabljen oklepaj. Preverite vpis.",
    "A connection error to LDAP / AD occurred, please check host, port and credentials." : "Prišlo je do napake povezave z LDAP / AD. Preverite podatke o gostitelju, vratih in poverilih.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP / AD." : "Manjka vsebnik »%uid«. Zamenjan bo z uporabniškim imenom pri poizvedbah LDAP / AD.",
    "Please provide a login name to test against" : "Vpisati je treba uporabniško ime za preizkus",
    "The group box was disabled, because the LDAP / AD server does not support memberOf." : "Skupina je onemogočena, ker na strežniku LDAP / AD ni omogočena podpora atributu memberOf.",
    "Password change rejected. Hint: " : "Spreminjanje gesla je zavrnjeno. Namig: ",
    "Please login with the new password" : "Prijavite se z novim geslom",
    "LDAP User backend" : "Uporabniška povezava LDAP",
    "Your password will expire tomorrow." : "Vaše geslo bo jutri poteklo.",
    "Your password will expire today." : "Geslo vam poteče danes!",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Geslo bo poteklo čez %n dan.","Geslo bo poteklo čez %n dneva","Geslo bo poteklo čez %n dni.","Geslo bo poteklo čez %n dni."],
    "LDAP / AD integration" : "Združevalnik za LDAP / AD",
    "_%s group found_::_%s groups found_" : ["%s najdena skupina","%s najdeni skupini","%s najdene skupine","%s najdenih skupin"],
    "_%s user found_::_%s users found_" : ["%s najden uporabnik","%s najdena uporabnika","%s najdeni uporabniki","%s najdenih uporabnikov"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Ni mogoče zaznati atributa prikaznega imena. Določiti ga je treba ročno med nastavitvami LDAP.",
    "Could not find the desired feature" : "Želene zmožnosti ni mogoče najti",
    "Invalid Host" : "Neveljaven gostitelj",
    "LDAP user and group backend" : "Ozadnji uporabniški in skupinski program LDAP",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Program omogoča skrbnikom vzpostavljanje povezave med okoljem Nextcloud in uporabniškim imenikom LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Program omogoča skrbnikom, da povežejo okolje Nextcloud z uporabniškim imenikom LDAP za overjanje pristnosti in zagotavljanje dostopa do podatkov uporabnikov, atributov in skupin. Skrbniki lahko nastavijo program za povezavo z enim ali več imeniki LDAP ali AD prek vmesnika LDAP. Atribute, kot so količinska omejitev, elektronski naslov, sličice profila, podatki o članstvu in drugo, je mogoče pridobiti iz imenika z ustreznimi poizvedbami in filtri.\n\nUporabnik se prijavi v Nextcloud z ustreznimi poverili LDAP in AD in si pridobi dostop na podlagi zahteve za preverjanje pristnosti, ki jo strežnik obdela. Okolje Nextcloud ne shranjuje gesel LDAP ali AD, temveč se ta poverila uporabljajo za preverjanje pristnosti uporabnika, nato pa Nextcloud uporabi sejo za povezan ID uporabnika. Več podrobnosti je na voljo v dokumentaciji ozadnjega programa LDAP za uporabnike in skupine.\n \n ",
    "Test Configuration" : "Preizkusne nastavitve",
    "Help" : "Pomoč",
    "Groups meeting these criteria are available in %s:" : "Skupine, skladne s kriterijem, so na voljo v %s:",
    "Only these object classes:" : "Le ti razredi predmetov:",
    "Only from these groups:" : "Le od skupin:",
    "Search groups" : "Iskanje skupin",
    "Available groups" : "Skupine na voljo",
    "Selected groups" : "Izbrane skupine",
    "Edit LDAP Query" : "Uredi poizvedbo LDAP",
    "LDAP Filter:" : "Filter LDAP:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Filter določa, katere skupine LDAP bodo imele dostop do %s.",
    "Verify settings and count the groups" : "Preveri nastavitve in preštej skupine",
    "When logging in, %s will find the user based on the following attributes:" : "Pri prijavi bodo prek %s najdeni uporabniki na osnovi navedenih atributov:",
    "LDAP / AD Username:" : "Uporabniško ime LDAP / AD:",
    "Allows login against the LDAP / AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Omogoča prijavo prek uporabniškega imena LDAP / AD, ki je ali »UID« ali ime računa »sAMAccountName«, ki bo zaznano.",
    "LDAP / AD Email Address:" : "Elektronski naslov LDAP / AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Omogoči prijavo z elektronskim naslovom; dovoljeni sta možnosti »mail« in »mailPrimaryAddress«.",
    "Other Attributes:" : "Drugi atributi:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Določi filter, ki bo uveljavljen ob poskusu prijave. »UID %%« zamenja uporabniško ime pri prijavi, na primer: »uid=%%uid«.",
    "Test Loginname" : "Preizkusi prijavno ime",
    "Verify settings" : "Preveri nastavitve",
    "%s. Server:" : "%s. Strežnik:",
    "Add a new configuration" : "Dodaj novo nastavitev",
    "Copy current configuration into new directory binding" : "Kopiraj trenutne nastavitve v vezi nove mape.",
    "Delete the current configuration" : "Izbriši trenutne nastavitve",
    "Host" : "Gostitelj",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Protokol je lahko izpuščen, če ni posebej zahtevana uporaba SSL. Če je, se mora naslov začeti z ldaps://",
    "Port" : "Vrata",
    "Detect Port" : "Zaznaj vrata",
    "User DN" : "Uporabnikovo enolično ime",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "Enolično ime uporabnikovega odjemalca, s katerim naj se opravi vezava, npr. uid=agent,dc=example,dc=com. Za brezimni dostop sta polji prikaznega imena in gesla prazni.",
    "Password" : "Geslo",
    "For anonymous access, leave DN and Password empty." : "Za brezimni dostop naj bosta polji imena in gesla prazni.",
    "Save Credentials" : "Shrani poverila",
    "One Base DN per line" : "Eno osnovno enolično ime na vrstico",
    "You can specify Base DN for users and groups in the Advanced tab" : "Osnovno enolično ime za uporabnike in skupine lahko določite v zavihku naprednih možnosti.",
    "Detect Base DN" : "Zaznava osnovnega enoznačnega imena (DN)",
    "Test Base DN" : "Preizkus osnovnega enoznačnega imena (DN)",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Preusmeri samodejne zahteve LDAP. Nastavitev je priporočljiva za obsežnejše namestitve, vendar zahteva nekaj znanja o delu z LDAP.",
    "Manually enter LDAP filters (recommended for large directories)" : "Ročno vstavi filtre za LDAP (priporočljivo za obsežnejše mape).",
    "Listing and searching for users is constrained by these criteria:" : "Iskanje in izpisovanje uporabnikov je omejeno po teh kriterijih:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Najobičajnejši razredi predmetov za uporabnike so »organizationalPerson«, »person«, »user« in »inetOrgPerson«. Če niste prepričani, kateri razred izbrati, se posvetujte s skrbnikom sistema.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Filter določa, kateri uporabniki LDAP bodo imeli dostop do %s.",
    "Verify settings and count users" : "Preveri nastavitve in preštej uporabnike",
    "Saving" : "Poteka shranjevanje ...",
    "Back" : "Nazaj",
    "Continue" : "Nadaljuj",
    "Please renew your password." : "Ponastavite geslo",
    "An internal error occurred." : "Prišlo je do notranje napake.",
    "Please try again or contact your administrator." : "Poskusite znova ali pa stopite v stik s skrbnikom sistema.",
    "Current password" : "Trenutno geslo",
    "New password" : "Novo geslo",
    "Renew password" : "Posodobi geslo",
    "Wrong password." : "Napačno geslo",
    "Cancel" : "Prekliči",
    "Server" : "Strežnik",
    "Users" : "Uporabniki",
    "Login Attributes" : "Atributi prijave",
    "Groups" : "Skupine",
    "Expert" : "Napredno",
    "Advanced" : "Napredne možnosti",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Opozorilo:</b> modul PHP LDAP mora biti nameščen, sicer vmesnik ne bo deloval. Za pravilno delovanje je paket treba namestiti.",
    "Connection Settings" : "Nastavitve povezave",
    "Configuration Active" : "Dejavna nastavitev",
    "When unchecked, this configuration will be skipped." : "Neizbrana možnost preskoči nastavitev.",
    "Backup (Replica) Host" : "Varnostna kopija (replika) podatkov gostitelja",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Podati je treba izbirno varnostno kopijo gostitelja. Ta mora biti natančna replika strežnika LDAP/AD.",
    "Backup (Replica) Port" : "Vrata varnostne kopije (replike)",
    "Disable Main Server" : "Onemogoči glavni strežnik",
    "Only connect to the replica server." : "Poveži le s podvojenim strežnikom.",
    "Turn off SSL certificate validation." : "Onemogoči določanje veljavnosti potrdila SSL.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Možnosti ni priporočljivo uporabiti; namenjena je zgolj preizkušanju! Če deluje povezava le s to možnostjo, je treba uvoziti potrdilo SSL strežnika LDAP na strežnik %s.",
    "Cache Time-To-Live" : "Predpomni podatke TTL",
    "in seconds. A change empties the cache." : "v sekundah. Sprememba izprazni predpomnilnik.",
    "Directory Settings" : "Nastavitve mape",
    "User Display Name Field" : "Polje za uporabnikovo prikazano ime",
    "The LDAP attribute to use to generate the user's display name." : "Atribut LDAP za uporabo pri ustvarjanju prikaznega imena uporabnika.",
    "2nd User Display Name Field" : "Polje 2. prikaznega imena uporabnika",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Izbirni atribut LDAP prikaznega imena v oklepaju. Končni izpis se pokaže kot »Ime Priimek (ime.priimek@domena.si)«.",
    "Base User Tree" : "Osnovno uporabniško drevo",
    "One User Base DN per line" : "Eno osnovno uporabniško ime na vrstico",
    "User Search Attributes" : "Uporabnikovi atributi iskanja",
    "Optional; one attribute per line" : "Izbirno; en atribut na vrstico",
    "Group Display Name Field" : "Polje za prikazano ime skupine",
    "The LDAP attribute to use to generate the groups's display name." : "Atribut LDAP za uporabo pri ustvarjanju prikaznega imena skupine.",
    "Base Group Tree" : "Osnovno drevo skupine",
    "One Group Base DN per line" : "Eno osnovno ime skupine na vrstico",
    "Group Search Attributes" : "Skupinski atributi iskanja",
    "Group-Member association" : "Povezava član-skupina",
    "Dynamic Group Member URL" : "Naslov URL člana dinamična skupine",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Atribut LDAP, ki vsebuje pri skupinskih predmetih iskalni naslov URL LDAP in določa, kateri predmeti sodijo k skupini (prazno polje onemogoči funkcionalnost dinamične skupine).",
    "Nested Groups" : "Gnezdene skupine",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "Možnost omogoča podporo skupinam, ki vključujejo skupine. Deluje je, če atribut članstva skupine vsebuje enolično ime (DN).",
    "Paging chunksize" : "Velikost odvoda za razbremenitev delovnega pomnilnik",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Velikost odvoda za razbremenitev delovnega pomnilnika, ki ga uporablja iskalnik LDAP, pri oštevilčenju uporabnika ali skupine (vrednost 0 možnost onemogoči).",
    "Enable LDAP password changes per user" : "Omogoči uporabnikom spreminjanje gesel LDAP",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Uporabnikom LDAP dovoli spreminjanje osebnega gesla, nadzornikom in skrbnikom skupin pa spreminjanje gesel povezanih skupin uporabnikov LDAP. Možnost deluje le, če so na strežniku LDAP ustrezno nastavljena pravila dostopa. Ko so gesla poslana na strežnik LDAP kot običajno besedilo, je priporočljivo uporabiti transportno šifriranje in omogočiti varnostno razprševanje gesel.",
    "(New password is sent as plain text to LDAP)" : "(novo geslo je poslano kot besedilo na LDAP)",
    "Default password policy DN" : "Privzeta pravila gesel enoznačnih imen DN",
    "Special Attributes" : "Posebni atributi",
    "Quota Field" : "Polje količinske omejitve",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Pustite prazno za privzeto količinsko omejitev, sicer navedite atribut LDAP/AD.",
    "Quota Default" : "Privzeta omejitev",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Prepiši privzeto omejitev velikosti prostora za uporabnike LDAP, pri katerih ta ni določena med nastavitvami.",
    "Email Field" : "Polje elektronske pošte",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Nastavite elektronski naslov uporabnika kot atribut LDAP, pustite prazno za privzeto delovanje.",
    "User Home Folder Naming Rule" : "Pravila poimenovanja uporabniške osebne mape",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Pustite prazno za uporabniško ime (privzeto), sicer navedite atribut LDAP/AD.",
    "\"$home\" Placeholder Field" : "Polje vsebnika »$home«",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "Vrednost »$home« bo znotraj nastavitev zunanje shrambe zamenjaj z vrednostjo določenega atributa.",
    "Internal Username" : "Programsko uporabniško ime",
    "Internal Username Attribute:" : "Programski atribut uporabniškega imena:",
    "Override UUID detection" : "Prezri zaznavo UUID",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "Privzeto je atribut UUID samodejno zaznan. Uporabljen je za določevanje uporabnikov LDAP in skupin. Notranje uporabniško ime je določeno prav na atributu UUID, če ni določeno drugače. To nastavitev je mogoče prepisati in poslati poljuben atribut. Zagotoviti je treba le, da je ta pridobljen kot enolični podatek za uporabnika ali skupino. Prazno polje določa privzeti način. Spremembe bodo vplivale na novo preslikane (dodane) uporabnike LDAP in skupine.",
    "UUID Attribute for Users:" : "Atribut UUID za uporabnike:",
    "UUID Attribute for Groups:" : "Atribut UUID za skupine:",
    "Username-LDAP User Mapping" : "Uporabniška preslikava uporabniškega imena na LDAP",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Uporabniška imena se uporabljajo za shranjevanje in dodeljevanje metapodatkov. Za natančno določevanje uporabnikov je vsakemu uporabniku LDAP preslikano tudi notranje uporabniško ime in sicer na UUID uporabnika LDAP. Poleg tega se enoznačno ime DN shrani tudi v predpomnilnik, da se zmanjša število poslanih zahtevkov na strežnik, a se to ne uporablja za določevanje. Če se enoznačno ime spremeni, bodo usrezno usklajene tudi spremembe. Notranje uporabniško ime se sicer uporablja na več mestih, zato je pričakovati, da ostanejo pri čiščenju preslikav nepovezani podatki. To brisanje ne vpliva upošteva ravni nastavitev, ampak deluje na vse nastavitve LDAP! Preslikav ni nikoli piporočljivo počistiti v produkcijskem okolju, je pa to mogoče v preizkusnem. ",
    "Clear Username-LDAP User Mapping" : "Izbriši preslikavo uporabniškega imena na LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Izbriši preslikavo skupine na LDAP",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [ a-zA-Z0-9_.@- ].  Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all *DAV services. With this setting, the default behavior can be overridden. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users." : "Privzeto je notranje uporabniško ime ustvarjeno po atributu UUID. To zagotavlja, da je uporabniško ime enkratno in da znakov ni treba posebej pretvarjati. Notrajne uporabniško ime ima določeno omejitev uporabe izključno znakov [ a-zA-Z0-9_.@- ]. Vsi drugi znaki so zamenjani z ustreznimi ASCII zamenjavami ali pa so enostavno izpuščeni. V primeru spora je k imenu dodana še številka. Notranje uporabniško ime je namenjeno določitvi istovetnosti in je hkrati tudi privzeto ime uporabnikove osebne mape. Je tudi del oddaljenega naslova URL, na primer za vse storitve *DAV. Ta možnost nastavitve privzet sistem prepiše, spremembe pa se uveljavijo le za na novo dodane (preslikane) uporabnike LDAP."
},
"nplurals=4; plural=(n%100==1 ? 0 : n%100==2 ? 1 : n%100==3 || n%100==4 ? 2 : 3);");
