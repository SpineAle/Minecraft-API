import React, { useEffect, useState } from 'react';
import "./SpiegazioneFiltri.css";
import { useLocation, useNavigate } from 'react-router-dom';
import "prismjs/themes/prism-tomorrow.css";
import Prism from "prismjs";
import Navbar from './Navbar';
import "./componente-DescrizioneBlocchi.jpg"

const SpiegazioneFiltri = () => {
	const { state } = useLocation();
	let mess = state.elemento;

	
	useEffect(() => {
		if (mess) {
			Prism.highlightAll();
		}
	}, [mess]);

	const ordinaAlfabeticoTesto = `
    // Funzione per ordinare i blocchi in ordine alfabetico crescente
    const ordinaAlfabetico = () => {
        // Controlla se i blocchi sono già ordinati in modo alfabetico crescente
        if (ordineAlfabetico === true) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "I blocchi sono già ordinati in modo crescente alfabetico!",
            });
        } else {
            // Aggiorna gli stati per indicare che i blocchi sono ordinati alfabeticamente
            setOrdineNonAlfabetico(false);
            setOrdineAlfabetico(true);

            // Ordina i blocchi per il nome in ordine alfabetico crescente
            let blocchiOrdinati = [...blocchi];
            blocchiOrdinati.sort((blocco1, blocco2) => {
                if (blocco1.name < blocco2.name) {
                    return -1;
                }
                if (blocco1.name > blocco2.name) {
                    return 1;
                }
                return 0;
            });

            // Aggiorna lo stato dei blocchi ordinati
            setBlocchi(blocchiOrdinati);
        }
    };
`;

const ordinaAlfabeticoDecrescenteTesto = `
    // Funzione per ordinare i blocchi in ordine alfabetico decrescente
    const ordinaAlfabeticoDecrescente = () => {
        // Controlla se i blocchi sono già ordinati in modo alfabetico decrescente
        if (ordineNonAlfabetico === true) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "I blocchi sono già ordinati in modo decrescente alfabetico!",
            });
        } else {
            // Aggiorna gli stati per indicare che i blocchi sono ordinati in modo decrescente
            setOrdineNonAlfabetico(true);
            setOrdineAlfabetico(false);

            // Ordina i blocchi per il nome in ordine alfabetico decrescente
            let blocchiOrdinati = [...blocchi];
            blocchiOrdinati.sort((blocco1, blocco2) => {
                if (blocco1.name < blocco2.name) {
                    return 1;
                }
                if (blocco1.name > blocco2.name) {
                    return -1;
                }
                return 0;
            });

            // Aggiorna lo stato dei blocchi ordinati
            setBlocchi(blocchiOrdinati);
        }
    };
`;

const filtroLuminositaTesto = `
    // Funzione per gestire il cambiamento della luminosità
    const cambiamentoLuminosita = (event) => {
        setIllumina(Number(event.target.value)); // Aggiorna lo stato della luminosità
        let variabile = Number(event.target.value);

        if (variabile === 0) {
            setBlocchi(blocchiOriginali); // Resetta i blocchi se la luminosità è 0
        } else {
            filtroLuminosita(Number(event.target.value)); // Filtra i blocchi in base alla luminosità
        }
    };

    // Funzione per filtrare i blocchi in base a un valore minimo di luminosità
    const filtroLuminosita = (numero) => {
        let blocchiLuminati = [];
        blocchi.map((elemento, indice) => {
            if (elemento.luminance >= numero) {
                blocchiLuminati.push(elemento);
            }
        });

        if (blocchiLuminati.length > 0) {
            setBlocchi(blocchiLuminati); // Aggiorna i blocchi filtrati
        }
    };
`;

const filtroResistenzaTesto = `
    // Funzione per filtrare i blocchi in base a un valore minimo di resistenza
    const filtroResistenza = (numero) => {
        let blocchiResistenti = [];
        blocchi.map((elemento, indice) => {
            if (elemento.blastResistance >= numero) {
                blocchiResistenti.push(elemento);
            }
        });

        if (blocchiResistenti.length > 0) {
            setBlocchi(blocchiResistenti); // Aggiorna i blocchi filtrati
        }
    };
`;

const filtraPerToolTesto = `
    // Funzione per filtrare i blocchi in base allo strumento selezionato
    const filtraPerTool = (event) => {
        let toolSel = event.target.value;
        setBlocchi(blocchiOriginali); // Resetta i blocchi prima di filtrare

        if (toolSel === 'Seleziona uno strumento') {
            annulla(); // Se non è stato selezionato uno strumento, annulla il filtro
        }

        let blocchiTool = [];
        setToolSelezionato(toolSel); // Aggiorna lo stato dello strumento selezionato

        blocchi.map((elemento, indice) => {
            if (elemento.tool === toolSel) {
                blocchiTool.push(elemento);
            }
        });

        if (blocchiTool.length > 0) {
            setBlocchi(blocchiTool); // Aggiorna i blocchi filtrati
        }
    };
`;

const stileTrasparenzaTesto = `
    // Funzione per ordinare i blocchi trasparenti
    const ordinaTrasparente = () => {
        let blocchiTrasparenti = [];
        blocchi.map((elemento, indice) => {
            if (elemento.transparent === true) {
                blocchiTrasparenti.push(elemento);
            }
        });
        setBlocchi(blocchiTrasparenti); // Aggiorna i blocchi trasparenti
    };

    // Funzione per ordinare i blocchi non trasparenti
    const ordinaNonTrasparente = () => {
        let blocchiNonTrasparenti = [];
        blocchi.map((elemento, indice) => {
            if (elemento.transparent === false) {
                blocchiNonTrasparenti.push(elemento);
            }
        });
        setBlocchi(blocchiNonTrasparenti); // Aggiorna i blocchi non trasparenti
    };

    // Stile per blocchi trasparenti
    const stileTrasparenza = () => {
        return {
            color: controllaTrasparenza ? "green" : "red",
        };
    };

    // Stile per blocchi non trasparenti
    const stileNonTrasparenza = () => {
        return {
            color: controllaNonTrasparenza ? "green" : "red",
        };
    };
`;

const annullaTesto = `
    // Funzione per ripristinare lo stato originale dei blocchi
    const annulla = () => {
        setBlocchi(blocchiOriginali);
        setIllumina(0); // Resetta il valore di luminosità
        setControllaTrasparenza(false);
        setControllaNonTrasparenza(false);
        setResistenza(0); // Resetta il valore di resistenza
        setToolSelezionato('Seleziona uno strumento'); // Resetta lo strumento selezionato
    };
`;

	
	

	let naviga = useNavigate();
	const apri = () => {
		naviga('/informazioni');
	};
	const apri2 = () => {
		naviga('/');
	};

	// Funzione per determinare il codice da visualizzare in base alla descrizione del filtro
	const controllo = (parametro) => {
		if (parametro === "Ordinare i blocchi alfabeticamente in ordine crescente.") {
			return ordinaAlfabeticoTesto;
		}
		if (parametro === "Ordinare i blocchi alfabeticamente in ordine decrescente.") {
			return ordinaAlfabeticoDecrescenteTesto;
		}
		if (parametro === "Filtrare i blocchi secondo la luminosità selezionata tramite uno slider.") {
			return filtroLuminositaTesto;
		}
		if (parametro === "Filtrare i blocchi secondo la resistenza selezionata tramite uno slider.") {
			return filtroResistenzaTesto;
		}
		if (parametro === "Filtrare i blocchi secondo lo strumento migliore per spaccarlo tramite un menù a tendina.") {
			return filtraPerToolTesto;
		}
		if (parametro === "Filtrare i blocchi trasparenti da quelli non trasparenti.") {
			return stileTrasparenzaTesto;
		}
		if (parametro === "Ripristinare la visualizzazione originale dei blocchi, annullando i filtri applicati.") {
			return annullaTesto;
		}
		return "// Filtro non trovato.";
	};

	return (
		<div className="spiegazione">
			<Navbar />
			<h2 style={{ marginTop: '15px', marginBottom: '15px' }}>Spiegazione del Filtro</h2>
			<pre className="codice animazione delay-1">
				<code className="language-javascript">{controllo(state.elemento)}</code>
			</pre>
			<div className='bottone'>
				<input type='button' value='Torna alle home' onClick={apri2} className='bottone-home animazione delay-2' style={{ marginRight: '30px' }} />
				<input type='button' value='Torna alle informazioni' onClick={apri} className='bottone-home bottone-info animazione delay-3' />
			</div>
		</div>
	);
};

export default SpiegazioneFiltri;
