package br.com.springboot.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;


@Controller
public class GameController {

    //Essa Classe serve para criar o endpoint onde o index será executado.
    @GetMapping("/index")
    public String index() {
        return "index";
    }
}

