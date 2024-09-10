<?php
$title = 'Contato'; 
include 'includes/header.php'; 
?>


<main>
    <div>
        <h1>Contato</h1>
        <p>Fale com a nossa empresa</p>
        <div>
            <form action="" method="post" id="form_exercicio">
                <div>
                    <label for="form_nome">Digite seu nome:</label>
                    <input type="text" id="form_nome" placeholder="Nome completo">
                </div>
                <div>
                    <label for="form_email">Digite seu email:</label>
                    <input type="email" id="form_email" placeholder="Email">
                </div>
                <div>
                    <label for="form_mensagem">Digite sua mensagem: </label>
                    <textarea id="form_mensagem" placeholder="Digite aqui o motivo de seu contato"></textarea>
                </div>
                <button type="submit" id="botao">Enviar via botão</button>
                <input type="submit" value="Enviar via atributo do input" id="clique_exercicio">
            </form>
        </div>
    </div>
</main>

<?php include 'includes/footer.php'; ?>
<script src="assets/js/script.js"></script>
