const botonestado = document.getElementById("botonestado")
const estadoselecionado = document.getElementById("estados")

botonestado.addEventListener("click",() =>{
    let selected
    selected = estadoselecionado.options[estadoselecionado.selectedIndex].text
    console.log(selected);
    
    if (selected=="Aguascalientes"){
        const divaguascalientes = document.querySelector('#divaguascalientes')
        divaguascalientes.classList.toggle("divaguascalientes")
        
        const botonaguascalientes = document.getElementById("botonaguascalientes")
        const edoaguascalientes = document.getElementById("edoaguascalientes")
        
        botonaguascalientes.addEventListener("click", () =>{
            let selected2
            selected2 = edoaguascalientes.options[edoaguascalientes.selectedIndex].text
            console.log(selected2);

            if (selected2=="Aguascalientes"){
                const imagenaguas = document.getElementById("imagenaguas")
                imagenaguas.classList.toggle("imagenaguas")
            }

            if (selected2=="El Llano"){
                const imagenelllano = document.getElementById("imagenelllano")
                imagenelllano.classList.toggle("imagenelllano")
            }

            if (selected2=="Jesus Maria"){
                const imagenjesus = document.getElementById("imagenjesus")
                imagenjesus.classList.toggle("imagenjesus")
            }

            if (selected2=="San Francisco de los Romo"){
                const sanromo = document.getElementById("sanromo")
                sanromo.classList.toggle("sanromo")
            }   

            if (selected2=="Tepezala"){
                const tepezala = document.getElementById("tepezala")
                tepezala.classList.toggle("tepezala")
            }

        })
    }

    if (selected=="Baja California"){
        const divbaja = document.getElementById("bajacalifornia")
        divbaja.classList.toggle("bajacalifornia")
        const botonbaja = document.getElementById("botonbaja")
        const elegirbaja = document.getElementById("elegirbaja")

        botonbaja.addEventListener("click",()=>{
            let selected2
            selected2 = elegirbaja.options[elegirbaja.selectedIndex].text
            console.log(selected2);

            if (selected2=="Ensenada"){
                const ensenada = document.getElementById("imagenensenada")
                ensenada.classList.toggle("imagenensenada")
            }

            if (selected2=="Mexicali"){
                const mexicali = document.getElementById("imagenesmexicali")
                mexicali.classList.toggle("imagenesmexicali")
            }

            if (selected2=="Playas de Rosarito"){
                const rosarito = document.getElementById("rosarito")
                rosarito.classList.toggle("rosarito")
            }

            if (selected2=="Tecate"){
                const tecate = document.getElementById("tecate")
                tecate.classList.toggle("tecate")
            }

            if (selected2=="Tijuana"){
                const tijuana = document.getElementById("tijuana")
                tijuana.classList.toggle("tijuana")
            }
        }) 
    }

    if (selected=="Baja California Sur"){
        const estadobajasur = document.getElementById("estadobajasur")
        estadobajasur.classList.toggle("estadobajasur")
        const botonbajasur = document.getElementById("botonbajasur")
        const elegirbajasur = document.getElementById("elegirbajasur")

        botonbajasur.addEventListener("click",()=>{

            selected2= elegirbajasur.options[elegirbajasur.selectedIndex].text
            console.log(selected2);

            if (selected2=="Comondu"){
                const comundu = document.getElementById("comondu")
                comundu.classList.toggle("comondu")
            }

            if (selected2=="La Paz"){
                const lapaz = document.getElementById("lapaz")
                lapaz.classList.toggle("lapaz")
            }

            if (selected2=="Loreto"){
                const loreto = document.getElementById("loreto")
                loreto.classList.toggle("loreto")
            }

            if (selected2=="Los Cabos"){
                const cabos = document.getElementById("cabos")
                cabos.classList.toggle("cabos")
            }

            if (selected2=="Mulege"){
                const mulege = document.getElementById("mulege")
                mulege.classList.toggle("mulege")
            }
        })
    }

    if (selected=="Campeche"){
        const divcampeche = document.getElementById("divcampeche")
        divcampeche.classList.toggle("divcampeche")
        const botoncampeche = document.getElementById("botoncampeche")
        const selectcampeche = document.getElementById("elegircampeche")

        botoncampeche.addEventListener("click",()=>{
            selected2 = selectcampeche.options[selectcampeche.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Calkini"){
                const calkini = document.getElementById("calkini")
                calkini.classList.toggle("calkini")
            }

            if (selected2=="Capital Campeche"){
                const campeche = document.getElementById("campeche2")
                campeche.classList.toggle("campeche2")
            }

            if (selected2=="Candelaria"){
                const candelaria = document.getElementById("candelaria")
                candelaria.classList.toggle("candelaria")
            }

            if (selected2=="Carmen"){
                const carmen = document.getElementById("carmen")
                carmen.classList.toggle("carmen")
            }

            if (selected2=="Tenabo"){
                const tenabo = document.getElementById("tenabo")
                tenabo.classList.toggle("tenabo")
            }
        })
    }

    if (selected=="Coahuila"){
        const divcoahuila = document.getElementById("divcoahuila")
        divcoahuila.classList.toggle("divcoahuila")
        const botoncoahuila = document.getElementById("botoncoahuila")
        const elegircoahuila = document.getElementById("elegircoahuila")

        botoncoahuila.addEventListener("click",()=>{
            selected2 = elegircoahuila.options[elegircoahuila.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Abasolo"){
                const abasolo = document.getElementById("abasolo")
                abasolo.classList.toggle("hidden")
            }

            if (selected2=="Allende"){
                const allende = document.getElementById("allende")
                allende.classList.toggle("hidden")
            }

            if (selected2=="Hidalgo"){
                const hidalgo = document.getElementById("hidalgo")
                hidalgo.classList.toggle("hidden")
            }

            if (selected2=="Guerrero"){
                const guerrero = document.getElementById("guerrero")
                guerrero.classList.toggle("hidden")
            }

            if (selected2=="Juarez"){
                const juarez = document.getElementById("juarez")
                juarez.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Colima"){
        const divcolima = document.getElementById("divcolima")
        divcolima.classList.toggle("divcoahuila")
        const botoncolima = document.getElementById("botoncolima")
        const elegircolima = document.getElementById("elegircolima")

        botoncolima.addEventListener("click",()=>{
            selected2 = elegircolima.options[elegircolima.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Armeria"){
                const armeria = document.getElementById("armeria")
                armeria.classList.toggle("hidden")
            }

            if (selected2=="Cuahutemoc"){
                const cuahutemoc = document.getElementById("cuahutemoc")
                cuahutemoc.classList.toggle("hidden")
            }

            if (selected2=="Comala"){
                const comala = document.getElementById("comala")
                comala.classList.toggle("hidden")
            }

            if (selected2=="Manzanillo"){
                const manzanillo = document.getElementById("manzanillo")
                manzanillo.classList.toggle("candelaria")
            }

            if (selected2=="Tecoman"){
                const tecoman = document.getElementById("tecoman")
                tecoman.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Chiapas"){
        const divchiapas = document.getElementById("divchiapas")
        divchiapas.classList.toggle("divcoahuila")
        const botonchiapas = document.getElementById("botonchiapas")
        const elegirchiapas = document.getElementById("elegirchiapas")

        botonchiapas.addEventListener("click",()=>{
            selected2 = elegirchiapas.options[elegirchiapas.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Acala"){
                const acala = document.getElementById("acala")
                acala.classList.toggle("hidden")
            }

            if (selected2=="Amatan"){
                const amatan = document.getElementById("amatan")
                amatan.classList.toggle("hidden")
            }

            if (selected2=="Bochil"){
                const bochil = document.getElementById("bochil")
                bochil.classList.toggle("hidden")
            }

            if (selected2=="Chilon"){
                const chilon = document.getElementById("chilon")
                chilon.classList.toggle("hidden")
            }

            if (selected2=="Ixtapa"){
                const ixtapa = document.getElementById("ixtapa")
                ixtapa.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Chihuahua"){
        const divchihuahua = document.getElementById("divchihuahua")
        divchihuahua.classList.toggle("divcoahuila")
        const botonchihuahua = document.getElementById("botonchihuahua")
        const elegirchihuahua = document.getElementById("elegirchihuahua")

        botonchihuahua.addEventListener("click",()=>{
            selected2 = elegirchihuahua.options[elegirchihuahua.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Aldama"){
                const aldama = document.getElementById("aldama")
                aldama.classList.toggle("hidden")
            }

            if (selected2=="Balleza"){
                const balleza = document.getElementById("balleza")
                balleza.classList.toggle("hidden")
            }

            if (selected2=="Chihuahua"){
                const chihuahua = document.getElementById("chihuahua")
                chihuahua.classList.toggle("hidden")
            }

            if (selected2=="Galeana"){
                const galeana = document.getElementById("galeana")
                galeana.classList.toggle("hidden")
            }

            if (selected2=="Guerrero"){
                const guerrero = document.getElementById("guerrero")
                guerrero.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Ciudad de México"){
        const divcdmx = document.getElementById("divcdmx")
        divcdmx.classList.toggle("divcoahuila")
        const botoncdmx = document.getElementById("botoncdmx")
        const elegircdmx = document.getElementById("elegircdmx")

        botoncdmx.addEventListener("click",()=>{
            selected2 = elegircdmx.options[elegircdmx.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Azcapotzalco"){
                const azcapotzalco = document.getElementById("azcapotzalco")
                azcapotzalco.classList.toggle("hidden")
            }

            if (selected2=="Iztacalco"){
                const iztacalco = document.getElementById("iztacalco")
                iztacalco.classList.toggle("hidden")
            }

            if (selected2=="Iztapalapa"){
                const iztapalapa = document.getElementById("iztapalapa")
                iztapalapa.classList.toggle("hidden")
            }

            if (selected2=="Tlalpan"){
                const tlalpan = document.getElementById("tlalpan")
                tlalpan.classList.toggle("hidden")
            }

            if (selected2=="Xochimilco"){
                const xochimilco = document.getElementById("xochimilco")
                xochimilco.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Durango"){
        const divdurango = document.getElementById("divdurango")
        divdurango.classList.toggle("divcoahuila")
        const botondurango = document.getElementById("botondurango")
        const elegirdurango = document.getElementById("elegirdurango")

        botondurango.addEventListener("click",()=>{
            selected2 = elegirdurango.options[elegirdurango.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Canelas"){
                const canelas = document.getElementById("canelas")
                canelas.classList.toggle("hidden")
            }

            if (selected2=="Durango"){
                const durango = document.getElementById("durango")
                durango.classList.toggle("hidden")
            }

            if (selected2=="Hidalgo"){
                const hidalgo = document.getElementById("hidalgo")
                hidalgo.classList.toggle("hidden")
            }

            if (selected2=="Ocampo"){
                const ocampo = document.getElementById("ocampo")
                ocampo.classList.toggle("hidden")
            }

            if (selected2=="Rodeo"){
                const rodeo = document.getElementById("rodeo")
                rodeo.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Guanajuato"){
        const divguanajuato = document.getElementById("divguanajuato")
        divguanajuato.classList.toggle("divcoahuila")
        const botonguanajuato = document.getElementById("botonguanajuato")
        const elegirguanajuato = document.getElementById("elegirguanajuato")

        botonguanajuato.addEventListener("click",()=>{
            selected2 = elegirguanajuato.options[elegirguanajuato.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Celaya"){
                const celaya = document.getElementById("celaya")
                celaya.classList.toggle("hidden")
            }

            if (selected2=="Leon"){
                const leon = document.getElementById("leon")
                leon.classList.toggle("hidden")
            }

            if (selected2=="Ocampo"){
                const ocampo = document.getElementById("ocampo")
                ocampo.classList.toggle("hidden")
            }

            if (selected2=="Salamanca"){
                const salamanca = document.getElementById("salamanca")
                salamanca.classList.toggle("hidden")
            }

            if (selected2=="Tarimoro"){
                const tarimoro = document.getElementById("tarimoro")
                tarimoro.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Guerrero"){
        const divguerrero = document.getElementById("divguerrero")
        divguerrero.classList.toggle("divcoahuila")
        const botonguerrero = document.getElementById("botonguerrero")
        const elegirguerrero = document.getElementById("elegirguerrero")

        botonguerrero.addEventListener("click",()=>{
            selected2 = elegirguerrero.options[elegirguerrero.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Apaxtla"){
                const apaxtla = document.getElementById("apaxtla")
                apaxtla.classList.toggle("hidden")
            }

            if (selected2=="Arcelia"){
                const arcelia = document.getElementById("arcelia")
                arcelia.classList.toggle("hidden")
            }

            if (selected2=="Atlixtac"){
                const atlixtac = document.getElementById("atlixtac")
                atlixtac.classList.toggle("hidden")
            }

            if (selected2=="Azoyu"){
                const azoyu = document.getElementById("azoyu")
                azoyu.classList.toggle("hidden")
            }

            if (selected2=="Copala"){
                const copala = document.getElementById("copala")
                copala.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Hidalgo"){
        const divhidalgo = document.getElementById("divhidalgo")
        divhidalgo.classList.toggle("divcoahuila")
        const botonhidalgo = document.getElementById("botonhidalgo")
        const elegirhidalgo = document.getElementById("elegirhidalgo")

        botonhidalgo.addEventListener("click",()=>{
            selected2 = elegirhidalgo.options[elegirhidalgo.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Acatlan"){
                const acatlan = document.getElementById("acatlan")
                acatlan.classList.toggle("hidden")
            }

            if (selected2=="Apan"){
                const apan = document.getElementById("apan")
                apan.classList.toggle("hidden")
            }

            if (selected2=="Cardonal"){
                const cardonal = document.getElementById("cardonal")
                cardonal.classList.toggle("hidden")
            }

            if (selected2=="Huautla"){
                const huautla = document.getElementById("huautla")
                huautla.classList.toggle("hidden")
            }

            if (selected2=="Jaltocan"){
                const jaltocan = document.getElementById("jaltocan")
                jaltocan.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Jalisco"){
        const divjalisco = document.getElementById("divjalisco")
        divjalisco.classList.toggle("divcoahuila")
        const botonjalisco = document.getElementById("botonjalisco")
        const elegirjalisco = document.getElementById("elegirjalisco")

        botonjalisco.addEventListener("click",()=>{
            selected2 = elegirjalisco.options[elegirjalisco.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Ayotlan"){
                const ayotlan = document.getElementById("ayotlan")
                ayotlan.classList.toggle("hidden")
            }

            if (selected2=="Ayutla"){
                const ayutla = document.getElementById("ayutla")
                ayutla.classList.toggle("hidden")
            }

            if (selected2=="Colotlan"){
                const colotlan = document.getElementById("colotlan")
                colotlan.classList.toggle("hidden")
            }

            if (selected2=="Guadalajara"){
                const guadalajara = document.getElementById("guadalajara")
                guadalajara.classList.toggle("hidden")
            }

            if (selected2=="Mixtlan"){
                const mixtlan = document.getElementById("mixtlan")
                mixtlan.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Estado de México"){
        const divedmx = document.getElementById("divedmx")
        divedmx.classList.toggle("divcoahuila")
        const botonedmx = document.getElementById("botonedmx")
        const elegiredmx = document.getElementById("elegiredmx")

        botonedmx.addEventListener("click",()=>{
            selected2 = elegiredmx.options[elegiredmx.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Aculco"){
                const aculco = document.getElementById("aculco")
                aculco.classList.toggle("hidden")
            }

            if (selected2=="Apaxco"){
                const apaxco = document.getElementById("apaxco")
                apaxco.classList.toggle("hidden")
            }

            if (selected2=="Chapultepec"){
                const chapultepec = document.getElementById("chapultepec")
                chapultepec.classList.toggle("hidden")
            }

            if (selected2=="Coyotepec"){
                const coyotepec = document.getElementById("coyotepec")
                coyotepec.classList.toggle("hidden")
            }

            if (selected2=="Metepec"){
                const metepec = document.getElementById("metepec")
                metepec.classList.toggle("hidden")
            }
        })
    }


    if (selected=="Michoacan"){
        const divmichoacan = document.getElementById("divmichoacan")
        divmichoacan.classList.toggle("divcoahuila")
        const botonmichoacan = document.getElementById("botonmichoacan")
        const elegirmichoacan = document.getElementById("elegirmichoacan")

        botonmichoacan.addEventListener("click",()=>{
            selected2 = elegirmichoacan.options[elegirmichoacan.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Aguililla"){
                const aguililla = document.getElementById("aguililla")
                aguililla.classList.toggle("hidden")
            }

            if (selected2=="Angangueo"){
                const angangueo = document.getElementById("angangueo")
                angangueo.classList.toggle("hidden")
            }

            if (selected2=="Apatzingan"){
                const apatzingan = document.getElementById("apatzingan")
                apatzingan.classList.toggle("hidden")
            }

            if (selected2=="Buenavista"){
                const buenavista = document.getElementById("buenavista")
                buenavista.classList.toggle("hidden")
            }

            if (selected2=="Jimenez"){
                const jimenez = document.getElementById("jimenez")
                jimenez.classList.toggle("hidden")
            }
        })
    }

    
    if (selected=="Morelos"){
        const divmorelos = document.getElementById("divmorelos")
        divmorelos.classList.toggle("divcoahuila")
        const botonmorelos = document.getElementById("botonmorelos")
        const elegirmorelos = document.getElementById("elegirmorelos")

        botonmorelos.addEventListener("click",()=>{
            selected2 = elegirmorelos.options[elegirmorelos.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Ayala"){
                const ayala = document.getElementById("ayala")
                ayala.classList.toggle("hidden")
            }

            if (selected2=="Cuautla"){
                const cuautla = document.getElementById("cuautla")
                cuautla.classList.toggle("hidden")
            }

            if (selected2=="Cuernavaca"){
                const cuernavaca = document.getElementById("cuernavaca")
                cuernavaca.classList.toggle("hidden")
            }

            if (selected2=="Temixco"){
                const temixco = document.getElementById("temixco")
                temixco.classList.toggle("hidden")
            }

            if (selected2=="Zacatepec"){
                const zacatepec = document.getElementById("zacatepec")
                zacatepec.classList.toggle("hidden")
            }
        })
    }

    if (selected=="Nayarit"){
        const divnayarit = document.getElementById("divnayarit")
        divnayarit.classList.toggle("divcoahuila")
        const botonnayarit = document.getElementById("botonedmx")
        const elegirnayarit = document.getElementById("elegirnayarit")

        botonnayarit.addEventListener("click",()=>{
            selected2 = elegirnayarit.options[elegirnayarit.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Acaponeta"){
                const acaponeta = document.getElementById("acaponeta")
                acaponeta.classList.toggle("hidden")
            }

            if (selected2=="Ahuacatlan"){
                const ahuacatlan = document.getElementById("ahuacatlan")
                ahuacatlan.classList.toggle("hidden")
            }

            if (selected2=="Compostela"){
                const compostela = document.getElementById("compostela")
                compostela.classList.toggle("hidden")
            }

            if (selected2=="Ruiz"){
                const ruiz = document.getElementById("ruiz")
                ruiz.classList.toggle("hidden")
            }

            if (selected2=="Tepic"){
                const tepic = document.getElementById("tepic")
                tepic .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Nuevo León"){
        const divnl = document.getElementById("divnl")
        divnl.classList.toggle("divcoahuila")
        const botonnl = document.getElementById("botonnl")
        const elegirnl = document.getElementById("elegirnl")

        botonnl.addEventListener("click",()=>{
            selected2 = elegirnl.options[elegirnl.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Allende"){
                const allende = document.getElementById("allende")
                allende.classList.toggle("hidden")
            }

            if (selected2=="Anahuac"){
                const anahuac = document.getElementById("anahuac")
                anahuac.classList.toggle("hidden")
            }

            if (selected2=="China"){
                const china = document.getElementById("china")
                china.classList.toggle("hidden")
            }

            if (selected2=="Linares"){
                const linares = document.getElementById("linares")
                linares.classList.toggle("hidden")
            }

            if (selected2=="Monterrey"){
                const monterrey = document.getElementById("monterrey")
                monterrey .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Oaxaca"){
        const divoaxaca = document.getElementById("divoaxaca")
        divoaxaca.classList.toggle("divcoahuila")
        const botonoaxaca = document.getElementById("botonoaxaca")
        const elegiroaxaca = document.getElementById("elegiroaxaca")

        botonoaxaca.addEventListener("click",()=>{
            selected2 = elegiroaxaca.options[elegiroaxaca.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Oaxaca"){
                const oaxaca = document.getElementById("oaxaca")
                oaxaca.classList.toggle("hidden")
            }

            if (selected2=="Tuxtepec"){
                const tuxtepec = document.getElementById("tuxtepec")
                tuxtepec.classList.toggle("hidden")
            }

            if (selected2=="Xoxocatlán"){
                const xoxocatlan = document.getElementById("xoxocatlan")
                xoxocatlan.classList.toggle("hidden")
            }

            if (selected2=="Crucecita"){
                const crucecita = document.getElementById("crucecita")
                crucecita.classList.toggle("hidden")
            }

            if (selected2=="Chahuites"){
                const chahuites = document.getElementById("chahuites")
                chahuites .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Puebla"){
        const divpuebla = document.getElementById("divpuebla")
        divpuebla.classList.toggle("divcoahuila")
        const botonpuebla = document.getElementById("botonpuebla")
        const elegirpuebla = document.getElementById("elegirpuebla")

        botonpuebla.addEventListener("click",()=>{
            selected2 = elegirpuebla.options[elegirpuebla.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Puebla"){
                const puebla = document.getElementById("puebla")
                puebla.classList.toggle("hidden")
            }

            if (selected2=="Tehuacán"){
                const tehuacan = document.getElementById("tehuacan")
                tehuacan.classList.toggle("hidden")
            }

            if (selected2=="Atlixco"){
                const atlixco = document.getElementById("atlixco")
                atlixco.classList.toggle("hidden")
            }

            if (selected2=="Acajete"){
                const acajete = document.getElementById("acajete")
                acajete.classList.toggle("hidden")
            }

            if (selected2=="Chignautla"){
                const chignautla = document.getElementById("chignautla")
                chignautla .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Querétaro"){
        const divqueretaro = document.getElementById("divqueretaro")
        divqueretaro.classList.toggle("divcoahuila")
        const botonqueretaro = document.getElementById("botonqueretaro")
        const elegirqueretaro = document.getElementById("elegirqueretaro")

        botonqueretaro.addEventListener("click",()=>{
            selected2 = elegirqueretaro.options[elegirqueretaro.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Colon"){
                const colon = document.getElementById("colon")
                colon.classList.toggle("hidden")
            }

            if (selected2=="Corregidora"){
                const corregidora = document.getElementById("corregidora")
                corregidora.classList.toggle("hidden")
            }

            if (selected2=="Huimilpan"){
                const atlixco = document.getElementById("atlixco")
                atlixco.classList.toggle("hidden")
            }

            if (selected2=="Peñamiller"){
                const penamiller = document.getElementById("penamiller")
                penamiller.classList.toggle("hidden")
            }

            if (selected2=="Queretaro"){
                const queretaro = document.getElementById("queretaro")
                queretaro .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Quintana Roo"){
        const divquintanaroo = document.getElementById("divquintanaroo")
        divquintanaroo.classList.toggle("divcoahuila")
        const botonquintana = document.getElementById("botonquintana")
        const elegirquintana = document.getElementById("elegirquintana")

        botonquintana.addEventListener("click",()=>{
            selected2 = elegirquintana.options[elegirquintana.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Bacalar"){
                const bacalar = document.getElementById("bacalar")
                bacalar.classList.toggle("hidden")
            }

            if (selected2=="Cozumel"){
                const cozumel = document.getElementById("cozumel")
                cozumel.classList.toggle("hidden")
            }

            if (selected2=="Isla Mujeres"){
                const islawoman = document.getElementById("islawoman")
                islawoman.classList.toggle("hidden")
            }

            if (selected2=="Tulum"){
                const tulum = document.getElementById("tulum")
                tulum.classList.toggle("hidden")
            }

            if (selected2=="Cancún"){
                const cancun = document.getElementById("cancun")
                cancun .classList.toggle("hidden")
            }
        })
    }

    if (selected=="San Luis Potosí"){
        const divslp = document.getElementById("divslp")
        divslp.classList.toggle("divcoahuila")
        const botonslp = document.getElementById("botonslp")
        const elegirslp = document.getElementById("elegirslp")

        botonslp.addEventListener("click",()=>{
            selected2 = elegirslp.options[elegirslp.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Ahualulco"){
                const ahualulco = document.getElementById("ahualulco")
                ahualulco.classList.toggle("hidden")
            }

            if (selected2=="Cerritos"){
                const cerritos = document.getElementById("cerritos")
                cerritos.classList.toggle("hidden")
            }

            if (selected2=="Guadalcazar"){
                const guadalcazar = document.getElementById("guadalcazar")
                guadalcazar.classList.toggle("hidden")
            }

            if (selected2=="Matehuala"){
                const matehuala = document.getElementById("matehuala")
                matehuala.classList.toggle("hidden")
            }

            if (selected2=="Zaragoza"){
                const zaragoza = document.getElementById("zaragoza")
                zaragoza .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Sinaloa"){
        const divsinaloa = document.getElementById("divsinaloa")
        divsinaloa.classList.toggle("divcoahuila")
        const botonsinaloa = document.getElementById("botonsinaloa")
        const elegirsinaloa = document.getElementById("elegirsinaloa")

        botonsinaloa.addEventListener("click",()=>{
            selected2 = elegirsinaloa.options[elegirsinaloa.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Ahome"){
                const ahome = document.getElementById("ahome")
                ahome.classList.toggle("hidden")
            }

            if (selected2=="Choix"){
                const choix = document.getElementById("choix")
                choix.classList.toggle("hidden")
            }

            if (selected2=="Concordia"){
                const concordia = document.getElementById("concordia")
                concordia.classList.toggle("hidden")
            }

            if (selected2=="Cosala"){
                const cosala = document.getElementById("cosala")
                cosala.classList.toggle("hidden")
            }

            if (selected2=="Rosario"){
                const rosario = document.getElementById("rosario")
                rosario .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Sonora"){
        const divsonora = document.getElementById("divsonora")
        divsonora.classList.toggle("divcoahuila")
        const botonsonora = document.getElementById("botonsonora")
        const elegirsonora = document.getElementById("elegirsonora")

        botonsonora.addEventListener("click",()=>{
            selected2 = elegirsonora.options[elegirsonora.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Bacum"){
                const bacum = document.getElementById("bacum")
                bacum.classList.toggle("hidden")
            }

            if (selected2=="Caborca"){
                const caborca = document.getElementById("caborca")
                caborca.classList.toggle("hidden")
            }

            if (selected2=="Nogales"){
                const nogales = document.getElementById("nogales")
                nogales.classList.toggle("hidden")
            }

            if (selected2=="Hermosillo"){
                const hermosillo = document.getElementById("hermosillo")
                hermosillo.classList.toggle("hidden")
            }

            if (selected2=="Yecora"){
                const yecora = document.getElementById("yecora")
                yecora .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Tabasco"){
        const divtabasco = document.getElementById("divtabasco")
        divtabasco.classList.toggle("divcoahuila")
        const botontabasco = document.getElementById("botontabasco")
        const elegirtabasco = document.getElementById("elegirtabasco")

        botontabasco.addEventListener("click",()=>{
            selected2 = elegirtabasco.options[elegirtabasco.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Balancan"){
                const balancan = document.getElementById("balancan")
                balancan.classList.toggle("hidden")
            }

            if (selected2=="Cardenas"){
                const cardenas = document.getElementById("cardenas")
                cardenas.classList.toggle("hidden")
            }

            if (selected2=="Centla"){
                const centla = document.getElementById("centla")
                centla.classList.toggle("hidden")
            }

            if (selected2=="Jalapa"){
                const jalapa = document.getElementById("jalapa")
                jalapa.classList.toggle("hidden")
            }

            if (selected2=="Paraiso"){
                const paraiso = document.getElementById("paraiso")
                paraiso .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Tamaulipas"){
        const divtamaulipas = document.getElementById("divtamaulipas")
        divtamaulipas.classList.toggle("divcoahuila")
        const botontam = document.getElementById("botontam")
        const elegirtam = document.getElementById("elegirtam")

        botontam.addEventListener("click",()=>{
            selected2 = elegirtam.options[elegirtam.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Aldama"){
                const aldama = document.getElementById("aldama")
                aldama.classList.toggle("hidden")
            }

            if (selected2=="Camargo"){
                const camargo = document.getElementById("camargo")
                camargo.classList.toggle("hidden")
            }

            if (selected2=="Reynosa"){
                const reynosa = document.getElementById("reynosa")
                reynosa.classList.toggle("hidden")
            }

            if (selected2=="Victoria"){
                const victoria = document.getElementById("victoria")
                victoria.classList.toggle("hidden")
            }

            if (selected2=="Tampico"){
                const tampico = document.getElementById("tampico")
                tampico .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Tlaxcala"){
        const divtlaxcala = document.getElementById("divtlaxcala")
        divtlaxcala.classList.toggle("divcoahuila")
        const botontlaxcala = document.getElementById("botontlaxcala")
        const elegirtlaxcala = document.getElementById("elegirtlaxcala")

        botontlaxcala.addEventListener("click",()=>{
            selected2 = elegirtlaxcala.options[elegirtlaxcala.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Apizaco"){
                const apizaco = document.getElementById("apizaco")
                apizaco.classList.toggle("hidden")
            }

            if (selected2=="Nativitas"){
                const nativitas = document.getElementById("nativitas")
                nativitas.classList.toggle("hidden")
            }

            if (selected2=="Panotla"){
                const panotla = document.getElementById("panotla")
                panotla.classList.toggle("hidden")
            }

            if (selected2=="Tlaxcala"){
                const tlaxcala = document.getElementById("tlaxcala")
                tlaxcala.classList.toggle("hidden")
            }

            if (selected2=="Tlaxco"){
                const tlaxco = document.getElementById("tlaxco")
                tlaxco .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Veracruz"){
        const divveracruz = document.getElementById("divveracruz")
        divveracruz.classList.toggle("divcoahuila")
        const botonvera = document.getElementById("botonvera")
        const elegirvera = document.getElementById("elegirvera")

        botonvera.addEventListener("click",()=>{
            selected2 = elegirvera.options[elegirvera.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Acatlan"){
                const acatlan = document.getElementById("acatlan")
                acatlan.classList.toggle("hidden")
            }

            if (selected2=="Boca del Rio"){
                const boca = document.getElementById("boca")
                boca.classList.toggle("hidden")
            }

            if (selected2=="Coatzacoalcos"){
                const coatzacoalcos = document.getElementById("coatzacoalcos")
                coatzacoalcos.classList.toggle("hidden")
            }

            if (selected2=="Coetzala"){
                const coetzala = document.getElementById("coetzala")
                coetzala.classList.toggle("hidden")
            }

            if (selected2=="Orizaba"){
                const orizaba = document.getElementById("orizaba")
                orizaba .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Yucatan"){
        const divyucatan = document.getElementById("divyucatan")
        divyucatan.classList.toggle("divcoahuila")
        const botonyuca = document.getElementById("botonyuca")
        const elegiryuca = document.getElementById("elegiryuca")

        botonyuca.addEventListener("click",()=>{
            selected2 = elegiryuca.options[elegiryuca.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Abala"){
                const abala = document.getElementById("abala")
                abala.classList.toggle("hidden")
            }

            if (selected2=="Cenotillo"){
                const cenotillo = document.getElementById("cenotillo")
                cenotillo.classList.toggle("hidden")
            }

            if (selected2=="Chemax"){
                const chemax = document.getElementById("chemax")
                chemax.classList.toggle("hidden")
            }

            if (selected2=="Merida"){
                const merida = document.getElementById("merida")
                merida.classList.toggle("hidden")
            }

            if (selected2=="Tepakan"){
                const tepakan = document.getElementById("tepakan")
                tepakan .classList.toggle("hidden")
            }
        })
    }

    if (selected=="Zacatecas"){
        const divzaca = document.getElementById("divzaca")
        divzaca.classList.toggle("divcoahuila")
        const botonzaca = document.getElementById("botonzaca")
        const elegirzaca = document.getElementById("elegirzaca")

        botonzaca.addEventListener("click",()=>{
            selected2 = elegirzaca.options[elegirzaca.selectedIndex].text
            console.log(selected2);
            
            if (selected2=="Apozol"){
                const apozol = document.getElementById("apozol")
                apozol.classList.toggle("hidden")
            }

            if (selected2=="Loreto"){
                const lore = document.getElementById("lore")
                lore.classList.toggle("hidden")
            }

            if (selected2=="Morelos"){
                const morelos = document.getElementById("morelos")
                morelos.classList.toggle("hidden")
            }

            if (selected2=="Tabasco"){
                const tabasco = document.getElementById("tabasco")
                tabasco.classList.toggle("hidden")
            }

            if (selected2=="Zacatecas"){
                const zacatecas = document.getElementById("zacatecas")
                zacatecas .classList.toggle("hidden")
            }
        })
    }


})