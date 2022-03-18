<template>
    <!-- Footer -->
    <footer class="text-center text-lg-start text-muted pt-2 mt-2">
        <section>
            <div class="container text-center text-md-start mt-5">
                <div class="row textcolor">
                    <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">LIGUES</h6>
                        <p><a href="#" class="text-reset">Bowling</a></p>
                        <p><a href="#" class="text-reset">Foot</a></p>
                        <p><a href="#" class="text-reset">Tennis</a></p>
                        <p><a href="#" class="text-reset">Plongée</a></p>
                    </div>
                    <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">NOS RESEAUX</h6>
                        <p><a href="#" class="me-4 text-reset"><i class="fas fa-linkedin"></i></a>M2L Maison Des Ligues</p>
                        <p><a href="#" class="me-4 text-reset"><i class="fas fa-twitter"></i></a>@M2L</p>
                        <p><a href="#" class="me-4 text-reset"><i class="fas fa-facebook"></i></a>Maison des Ligues</p>
                        <p><a href="#" class="me-4 text-reset"><i class="fas fa-instagram"></i></a>MaisonDesLigues</p>
                    </div>
                    <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">CONTACTS</h6>
                        <p><i class="fas fa-home me-3"></i> 13 Rue Jean Moulin, 54510 Tomblaine</p>
                        <p><i class="fas fa-envelope me-3"></i> contact@M2L.com</p>
                        <p><i class="fas fa-phone me-3"></i> 01 02 03 04 05</p>
                        <p><i class="fas fa-print me-3"></i> 06 07 08 09 10</p>
                    </div>
                </div>
            </div>
        </section>
        <div class="text-center p-4 textcolor" style="background-color: rgba(0, 0, 0, 0.05);">
            © 2021 Copyright :
            <a class="text-reset fw-bold" href="#">M2l.com</a>. <span><a href="#">Mentions légales.</a></span>
        </div>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>
<style lang="scss" scoped>
footer {
  background: rgba(255, 255, 255, 0.664);
  opacity: 1;
}
footer .textcolor {
  color: #2B4C88;
}
</style>