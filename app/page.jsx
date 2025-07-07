 HEAD
'use client';
import React, { useState } from 'react';
import { ChevronRight, Mail, ExternalLink, ArrowRight, Zap, Code, Users, Shield, Building, CheckCircle } from 'lucide-react';
const AyromexLanding = () => {
    const [activeProject, setActiveProject] = useState(null);
    const [activeActivity, setActiveActivity] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        reason: 'Investimenti',
        message: '',
        nda: false
    });

    const projects = [
        {
            id: 'boostami',
            icon: '🔵',
            name: 'BOOSTAMI',
            tagline: 'Servizio B2B di creazione brand kit automatizzati per piccole imprese, locali e freelance.',
            description: 'Branding, sito, loghi, chatbot e grafiche AI in 5 giorni.',
            color: 'from-blue-500 to-cyan-500',
            status: 'Operativo'
        },
        {
            id: 'ayrodom',
            icon: '🟣',
            name: 'AYRODOM',
            tagline: 'Sistema SaaS con agenti AI collaborativi per PMI.',
            description: 'Automatizza vendite, supporto, contabilità, social e logistica.',
            color: 'from-purple-500 to-pink-500',
            status: 'Operativo'
        },
        {
            id: 'demasiad',
            icon: '⚫️',
            name: 'D3MAS1ADØ',
            tagline: 'Urban-luxury brand con linguaggio multiculturale, storytelling cinematografico e AI integration.',
            description: 'Lana AI come volto narrativo del brand.',
            color: 'from-gray-700 to-black',
            status: 'Sviluppo'
        },
        {
            id: 'secret',
            icon: '🔐',
            name: 'SECRET ONE',
            tagline: 'Progetto prototipale per contenuti riservati, monetizzazione privata e canali criptati.',
            description: 'In fase di ricerca e sviluppo.',
            color: 'from-red-600 to-orange-500',
            status: 'Prototipo'
        }
    ];

    const activities = [
        {
            id: 'media',
            icon: '🎬',
            title: 'MEDIA & CREATIVITÀ',
            items: [
                'Produzione cinematografica, video e programmi TV',
                'Attività di design specializzato (visual, branding, UX/UI)',
                'Attività creative e artistiche, inclusa gestione di diritti e contenuti'
            ]
        },
        {
            id: 'software',
            icon: '💻',
            title: 'SOFTWARE & AI',
            items: [
                'Realizzazione software su commessa (SaaS, dashboard, agenti AI)',
                'Consulenza IT e sviluppo architetture digitali',
                'Gestione portali web e ambienti online automatizzati'
            ]
        },
        {
            id: 'marketing',
            icon: '📣',
            title: 'MARKETING & PUBBLICITÀ',
            items: [
                'Consulenza strategica in management e comunicazione',
                'Agenzia pubblicitaria (campagne, ADV, funnel)',
                'Attività di design pubblicitario per stampa e digitale'
            ]
        },
        {
            id: 'commerce',
            icon: '🛒',
            title: 'COMMERCIO E SERVIZI',
            items: [
                'Vendita al dettaglio via Internet (eCommerce e prodotti digitali)',
                'Organizzazione di eventi, promozioni e conferenze per brand'
            ]
        }
    ];

    const handleSubmit = () => {
        // Validazione base
        if (!formData.name || !formData.email || !formData.company) {
            alert('Per favore, compila tutti i campi obbligatori.');
            return;
        }

        // Validazione email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            alert('Per favore, inserisci un indirizzo email valido.');
            return;
        }

        if (!formData.nda) {
            alert('Per procedere è necessario accettare l\'accordo di riservatezza.');
            return;
        }

        // Simulazione invio form
        alert(`Richiesta inviata con successo. Il team AYROMEX ti contatterà entro 48 ore, ${formData.name}.`);
        setFormData({
            name: '',
            company: '',
            email: '',
            reason: 'Investimenti',
            message: '',
            nda: false
        });
    };

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    return (
        <div className="min-h-screen bg-gray-950 text-white font-sans">
            {/* Animated Background */}
            <div className="fixed inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 animate-pulse"></div>
            </div>

            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Logo AYROMEX */}
                    <div className="mb-12 flex justify-center">
                        <div className="relative">
                            <svg
                                width="200"
                                height="200"
                                viewBox="0 0 200 200"
                                className="drop-shadow-2xl"
                            >
                                {/* Triangolo esterno con effetto 3D */}
                                <path
                                    d="M100 20 L170 160 L30 160 Z"
                                    fill="url(#gradient1)"
                                    stroke="url(#gradient2)"
                                    strokeWidth="2"
                                />
                                {/* Triangolo interno con lettera A */}
                                <path
                                    d="M100 50 L130 120 L70 120 Z"
                                    fill="url(#gradient3)"
                                />
                                {/* Lettera A stilizzata */}
                                <path
                                    d="M85 105 L100 75 L115 105 M90 95 L110 95"
                                    stroke="white"
                                    strokeWidth="4"
                                    fill="none"
                                />
                                {/* Testo AYROMEX */}
                                <text
                                    x="100"
                                    y="185"
                                    textAnchor="middle"
                                    className="fill-white text-lg font-bold tracking-wider"
                                >
                                    AYROMEX
                                </text>

                                {/* Gradienti */}
                                <defs>
                                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#1e40af', stopOpacity: 0.8 }} />
                                        <stop offset="50%" style={{ stopColor: '#7c3aed', stopOpacity: 0.9 }} />
                                        <stop offset="100%" style={{ stopColor: '#0891b2', stopOpacity: 0.8 }} />
                                    </linearGradient>
                                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#60a5fa' }} />
                                        <stop offset="100%" style={{ stopColor: '#a78bfa' }} />
                                    </linearGradient>
                                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#000000', stopOpacity: 0.7 }} />
                                        <stop offset="100%" style={{ stopColor: '#374151', stopOpacity: 0.8 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            AYROMEX SRL
                        </h1>
                        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
                    </div>

                    <h2 className="text-xl md:text-3xl font-light mb-6 text-gray-300">
                        Ogni brand ha un volto. Noi siamo la mente.
                    </h2>

                    <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
                        Società europea registrata che opera come <strong>contenitore strategico, infrastruttura operativa e base tecnica</strong> per la creazione, gestione e scalabilità di progetti digitali, brand autonomi e sistemi AI-driven.
                    </p>

                    <p className="text-md text-gray-500 mb-12 max-w-3xl mx-auto">
                        Non siamo un'agenzia. Siamo un <strong>OS aziendale</strong>, una centrale silenziosa che genera impatto, automazione e valore attraverso entità distinte.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => document.getElementById('progetti').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                        >
                            Esplora Progetti
                            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={() => document.getElementById('contatto').scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
                        >
                            Contatto Riservato
                        </button>
                    </div>
                </div>
            </section>

            {/* Chi Siamo */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Chi Siamo</h2>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                            <div className="text-center">
                                <Building className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                                <h3 className="text-xl font-semibold mb-2">Struttura Legale</h3>
                                <p className="text-gray-400">Società europea registrata con attività operative certificate</p>
                            </div>
                            <div className="text-center">
                                <Zap className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                                <h3 className="text-xl font-semibold mb-2">Innovazione Tech</h3>
                                <p className="text-gray-400">AI-driven solutions, automazione e sistemi scalabili</p>
                            </div>
                            <div className="text-center">
                                <Shield className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                                <h3 className="text-xl font-semibold mb-2">Silenzio Operativo</h3>
                                <p className="text-gray-400">Metodo, disciplina e riservatezza in ogni progetto</p>
                            </div>
                        </div>
                        <div className="border-t border-gray-700 pt-8">
                            <p className="text-lg text-gray-300 leading-relaxed text-center">
                                AYROMEX SRL è una struttura strategica fondata per costruire brand AI-driven,
                                sistemi automatizzati e processi replicabili. Operiamo tra tecnologia, branding e automazione
                                con metodo, disciplina e silenzio operativo.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Progetti Attivi */}
            <section id="progetti" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Progetti Attivi</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project) => (
                            <div
                                key={project.id}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer group"
                                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl`}>
                                        {project.icon}
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                                                {project.name}
                                            </h3>
                                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${project.status === 'Operativo' ? 'bg-green-900 text-green-300' :
                                                    project.status === 'Sviluppo' ? 'bg-yellow-900 text-yellow-300' :
                                                        'bg-gray-800 text-gray-400'
                                                }`}>
                                                {project.status}
                                            </span>
                                        </div>
                                        <p className="text-gray-400 mb-2">{project.tagline}</p>
                                        <p className="text-gray-500 text-sm">{project.description}</p>
                                    </div>
                                    <ChevronRight className={`w-5 h-5 text-gray-600 transition-transform ${activeProject === project.id ? 'rotate-90' : ''}`} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Attività Legali */}
            <section className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Attività Autorizzate</h2>
                    <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
                        AYROMEX SRL è legalmente abilitata a operare in diversi settori strategici,
                        con autorizzazioni complete per ogni ambito di attività.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {activities.map((activity) => (
                            <div
                                key={activity.id}
                                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                                onClick={() => setActiveActivity(activeActivity === activity.id ? null : activity.id)}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="text-3xl">{activity.icon}</div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold mb-3 text-blue-400">{activity.title}</h3>
                                        <div className={`space-y-2 transition-all duration-300 ${activeActivity === activity.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                                            {activity.items.map((item, index) => (
                                                <div key={index} className="flex items-start gap-2">
                                                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                    <span className="text-sm text-gray-400">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                        <button
                                            className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setActiveActivity(activeActivity === activity.id ? null : activity.id);
                                            }}
                                        >
                                            {activeActivity === activity.id ? 'Nascondi dettagli' : 'Mostra dettagli'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Come Lavoriamo */}
            <section className="py-20 px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Come Lavoriamo</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Identifichiamo</h3>
                                <p className="text-gray-400">Un bisogno o una frizione nel mercato</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Progettiamo</h3>
                                <p className="text-gray-400">L'architettura tecnico-creativa</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Lanciamo</h3>
                                <p className="text-gray-400">Il brand in autonomia o white-label</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Gestiamo</h3>
                                <p className="text-gray-400">Tutto dal centro operativo AYROMEX SRL</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contatto Riservato */}
            <section id="contatto" className="py-20 px-4">
                <div className="max-w-2xl mx-auto">
                    <h2 className="text-4xl font-bold mb-12 text-center">Contatto Riservato</h2>
                    <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                        <div className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">Nome *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="company" className="block text-sm font-medium mb-2">Azienda *</label>
                                    <input
                                        type="text"
                                        id="company"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="reason" className="block text-sm font-medium mb-2">Motivo del contatto</label>
                                <select
                                    id="reason"
                                    name="reason"
                                    value={formData.reason}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                                >
                                    <option value="Investimenti">Investimenti</option>
                                    <option value="Collaborazione">Collaborazione</option>
                                    <option value="Partnership tecnica">Partnership tecnica</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Messaggio</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Descrivi brevemente il tuo interesse..."
                                />
                            </div>

                            <div className="flex items-start gap-3">
                                <input
                                    type="checkbox"
                                    id="nda"
                                    name="nda"
                                    checked={formData.nda}
                                    onChange={handleInputChange}
                                    className="mt-1"
                                />
                                <label htmlFor="nda" className="text-sm text-gray-400">
                                    Accetto l'accordo di riservatezza e comprendo che le informazioni condivise saranno trattate con massima confidenzialità.
                                </label>
                            </div>

                            <button
                                onClick={handleSubmit}
                                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group"
                            >
                                Invia Richiesta
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                        <p className="text-center text-sm text-gray-500 mt-6">
                            Nessun funnel. Nessun tool invasivo. Solo valore filtrato.
                        </p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-gray-800">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">AYROMEX SRL</h3>
                        <p className="text-gray-400">Società europea registrata - Contenitore strategico per progetti digitali</p>
                    </div>
                    <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
                    <p className="text-gray-500 text-sm">
                        © 2025 AYROMEX SRL. Tutti i diritti riservati.
                    </p>
                </div>
            </footer>
        </div>
    );
};

export default AyromexLanding;

import React, { useState } from 'react';
import { ChevronRight, Mail, ExternalLink, ArrowRight, Zap, Code, Users, Shield, Building, CheckCircle } from 'lucide-react';

const AyromexLanding = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeActivity, setActiveActivity] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    reason: 'Investimenti',
    message: '',
    nda: false
  });

  const projects = [
    {
      id: 'boostami',
      icon: '🔵',
      name: 'BOOSTAMI',
      tagline: 'Servizio B2B di creazione brand kit automatizzati per piccole imprese, locali e freelance.',
      description: 'Branding, sito, loghi, chatbot e grafiche AI in 5 giorni.',
      color: 'from-blue-500 to-cyan-500',
      status: 'Operativo'
    },
    {
      id: 'ayrodom',
      icon: '🟣',
      name: 'AYRODOM',
      tagline: 'Sistema SaaS con agenti AI collaborativi per PMI.',
      description: 'Automatizza vendite, supporto, contabilità, social e logistica.',
      color: 'from-purple-500 to-pink-500',
      status: 'Operativo'
    },
    {
      id: 'demasiad',
      icon: '⚫️',
      name: 'D3MAS1ADØ',
      tagline: 'Urban-luxury brand con linguaggio multiculturale, storytelling cinematografico e AI integration.',
      description: 'Lana AI come volto narrativo del brand.',
      color: 'from-gray-700 to-black',
      status: 'Sviluppo'
    },
    {
      id: 'secret',
      icon: '🔐',
      name: 'SECRET ONE',
      tagline: 'Progetto prototipale per contenuti riservati, monetizzazione privata e canali criptati.',
      description: 'In fase di ricerca e sviluppo.',
      color: 'from-red-600 to-orange-500',
      status: 'Prototipo'
    }
  ];

  const activities = [
    {
      id: 'media',
      icon: '🎬',
      title: 'MEDIA & CREATIVITÀ',
      items: [
        'Produzione cinematografica, video e programmi TV',
        'Attività di design specializzato (visual, branding, UX/UI)',
        'Attività creative e artistiche, inclusa gestione di diritti e contenuti'
      ]
    },
    {
      id: 'software',
      icon: '💻',
      title: 'SOFTWARE & AI',
      items: [
        'Realizzazione software su commessa (SaaS, dashboard, agenti AI)',
        'Consulenza IT e sviluppo architetture digitali',
        'Gestione portali web e ambienti online automatizzati'
      ]
    },
    {
      id: 'marketing',
      icon: '📣',
      title: 'MARKETING & PUBBLICITÀ',
      items: [
        'Consulenza strategica in management e comunicazione',
        'Agenzia pubblicitaria (campagne, ADV, funnel)',
        'Attività di design pubblicitario per stampa e digitale'
      ]
    },
    {
      id: 'commerce',
      icon: '🛒',
      title: 'COMMERCIO E SERVIZI',
      items: [
        'Vendita al dettaglio via Internet (eCommerce e prodotti digitali)',
        'Organizzazione di eventi, promozioni e conferenze per brand'
      ]
    }
  ];

  const handleSubmit = () => {
    // Validazione base
    if (!formData.name || !formData.email || !formData.company) {
      alert('Per favore, compila tutti i campi obbligatori.');
      return;
    }
    
    // Validazione email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Per favore, inserisci un indirizzo email valido.');
      return;
    }

    if (!formData.nda) {
      alert('Per procedere è necessario accettare l\'accordo di riservatezza.');
      return;
    }
    
    // Simulazione invio form
    alert(`Richiesta inviata con successo. Il team AYROMEX ti contatterà entro 48 ore, ${formData.name}.`);
    setFormData({ 
      name: '', 
      company: '', 
      email: '', 
      reason: 'Investimenti', 
      message: '', 
      nda: false 
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans">
      {/* Animated Background */}
      <div className="fixed inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-gray-900 animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo AYROMEX */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <svg 
                width="200" 
                height="200" 
                viewBox="0 0 200 200" 
                className="drop-shadow-2xl"
              >
                {/* Triangolo esterno con effetto 3D */}
                <path 
                  d="M100 20 L170 160 L30 160 Z" 
                  fill="url(#gradient1)" 
                  stroke="url(#gradient2)" 
                  strokeWidth="2"
                />
                {/* Triangolo interno con lettera A */}
                <path 
                  d="M100 50 L130 120 L70 120 Z" 
                  fill="url(#gradient3)"
                />
                {/* Lettera A stilizzata */}
                <path 
                  d="M85 105 L100 75 L115 105 M90 95 L110 95" 
                  stroke="white" 
                  strokeWidth="4" 
                  fill="none"
                />
                {/* Testo AYROMEX */}
                <text 
                  x="100" 
                  y="185" 
                  textAnchor="middle" 
                  className="fill-white text-lg font-bold tracking-wider"
                >
                  AYROMEX
                </text>
                
                {/* Gradienti */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#1e40af', stopOpacity: 0.8}} />
                    <stop offset="50%" style={{stopColor: '#7c3aed', stopOpacity: 0.9}} />
                    <stop offset="100%" style={{stopColor: '#0891b2', stopOpacity: 0.8}} />
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#60a5fa'}} />
                    <stop offset="100%" style={{stopColor: '#a78bfa'}} />
                  </linearGradient>
                  <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{stopColor: '#000000', stopOpacity: 0.7}} />
                    <stop offset="100%" style={{stopColor: '#374151', stopOpacity: 0.8}} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
          
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              AYROMEX SRL
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8"></div>
          </div>
          
          <h2 className="text-xl md:text-3xl font-light mb-6 text-gray-300">
            Ogni brand ha un volto. Noi siamo la mente.
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-4xl mx-auto leading-relaxed">
            Società europea registrata che opera come <strong>contenitore strategico, infrastruttura operativa e base tecnica</strong> per la creazione, gestione e scalabilità di progetti digitali, brand autonomi e sistemi AI-driven.
          </p>
          
          <p className="text-md text-gray-500 mb-12 max-w-3xl mx-auto">
            Non siamo un'agenzia. Siamo un <strong>OS aziendale</strong>, una centrale silenziosa che genera impatto, automazione e valore attraverso entità distinte.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => document.getElementById('progetti').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group"
            >
              Esplora Progetti
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              onClick={() => document.getElementById('contatto').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300"
            >
              Contatto Riservato
            </button>
          </div>
        </div>
      </section>

      {/* Chi Siamo */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Chi Siamo</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Building className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                <h3 className="text-xl font-semibold mb-2">Struttura Legale</h3>
                <p className="text-gray-400">Società europea registrata con attività operative certificate</p>
              </div>
              <div className="text-center">
                <Zap className="w-12 h-12 mx-auto mb-4 text-purple-400" />
                <h3 className="text-xl font-semibold mb-2">Innovazione Tech</h3>
                <p className="text-gray-400">AI-driven solutions, automazione e sistemi scalabili</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4 text-cyan-400" />
                <h3 className="text-xl font-semibold mb-2">Silenzio Operativo</h3>
                <p className="text-gray-400">Metodo, disciplina e riservatezza in ogni progetto</p>
              </div>
            </div>
            <div className="border-t border-gray-700 pt-8">
              <p className="text-lg text-gray-300 leading-relaxed text-center">
                AYROMEX SRL è una struttura strategica fondata per costruire brand AI-driven, 
                sistemi automatizzati e processi replicabili. Operiamo tra tecnologia, branding e automazione 
                con metodo, disciplina e silenzio operativo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Progetti Attivi */}
      <section id="progetti" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Progetti Attivi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer group"
                onClick={() => setActiveProject(activeProject === project.id ? null : project.id)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center text-2xl`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-blue-400 transition-colors">
                        {project.name}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        project.status === 'Operativo' ? 'bg-green-900 text-green-300' :
                        project.status === 'Sviluppo' ? 'bg-yellow-900 text-yellow-300' :
                        'bg-gray-800 text-gray-400'
                      }`}>
                        {project.status}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">{project.tagline}</p>
                    <p className="text-gray-500 text-sm">{project.description}</p>
                  </div>
                  <ChevronRight className={`w-5 h-5 text-gray-600 transition-transform ${activeProject === project.id ? 'rotate-90' : ''}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attività Legali */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Attività Autorizzate</h2>
          <p className="text-center text-gray-400 mb-12 max-w-3xl mx-auto">
            AYROMEX SRL è legalmente abilitata a operare in diversi settori strategici, 
            con autorizzazioni complete per ogni ambito di attività.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity) => (
              <div 
                key={activity.id}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveActivity(activeActivity === activity.id ? null : activity.id)}
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{activity.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-3 text-blue-400">{activity.title}</h3>
                    <div className={`space-y-2 transition-all duration-300 ${activeActivity === activity.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      {activity.items.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-400">{item}</span>
                        </div>
                      ))}
                    </div>
                    <button 
                      className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveActivity(activeActivity === activity.id ? null : activity.id);
                      }}
                    >
                      {activeActivity === activity.id ? 'Nascondi dettagli' : 'Mostra dettagli'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come Lavoriamo */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Come Lavoriamo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Identifichiamo</h3>
                <p className="text-gray-400">Un bisogno o una frizione nel mercato</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Progettiamo</h3>
                <p className="text-gray-400">L'architettura tecnico-creativa</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Lanciamo</h3>
                <p className="text-gray-400">Il brand in autonomia o white-label</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Gestiamo</h3>
                <p className="text-gray-400">Tutto dal centro operativo AYROMEX SRL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contatto Riservato */}
      <section id="contatto" className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Contatto Riservato</h2>
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nome *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">Azienda *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="reason" className="block text-sm font-medium mb-2">Motivo del contatto</label>
                <select
                  id="reason"
                  name="reason"
                  value={formData.reason}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors"
                >
                  <option value="Investimenti">Investimenti</option>
                  <option value="Collaborazione">Collaborazione</option>
                  <option value="Partnership tecnica">Partnership tecnica</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Messaggio</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 transition-colors resize-none"
                  placeholder="Descrivi brevemente il tuo interesse..."
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  checked={formData.nda}
                  onChange={handleInputChange}
                  className="mt-1"
                />
                <label htmlFor="nda" className="text-sm text-gray-400">
                  Accetto l'accordo di riservatezza e comprendo che le informazioni condivise saranno trattate con massima confidenzialità.
                </label>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Invia Richiesta
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <p className="text-center text-sm text-gray-500 mt-6">
              Nessun funnel. Nessun tool invasivo. Solo valore filtrato.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">AYROMEX SRL</h3>
            <p className="text-gray-400">Società europea registrata - Contenitore strategico per progetti digitali</p>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent mb-6"></div>
          <p className="text-gray-500 text-sm">
            © 2025 AYROMEX SRL. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AyromexLanding;
 bc288e58bb947f53812027f50b707259462f1a73
