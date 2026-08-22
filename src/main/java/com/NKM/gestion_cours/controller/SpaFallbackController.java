package com.NKM.gestion_cours.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * Redirige toute route qui n'est ni un appel API (/api/...) ni un fichier statique
 * (JS, CSS, images...) vers index.html, pour laisser React Router gérer la navigation
 * côté client. Nécessaire car Spring Boot ne connaît pas les routes définies dans React
 * (ex: /cours/3) : sans ce contrôleur, actualiser une page interne renvoie une 404.
 *
 * Le pattern exclut explicitement /api/** (traité par les autres contrôleurs REST)
 * et les chemins contenant un point (fichiers statiques comme main.js, style.css,
 * favicon.ico) pour ne pas casser le chargement des assets.
 */
@Controller
public class SpaFallbackController {

    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }

    @RequestMapping(value = "/**/{path:[^\\.]*}")
    public String redirectNested() {
        return "forward:/index.html";
    }
}
