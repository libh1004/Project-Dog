function footer() {
    return "<div class=\"links\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-md-4\">\n" +
        "                    <div class=\"content\">\n" +
        "                        <i class=\"fas fa-paw\"></i>&nbsp&nbsp&nbsp<span>About Pet Shop</span>\n" +
        "                        <p class=\"item\">Simply dummy text of the printing and typesetting industry. Lorem lpsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gallery of type and scrambled it to make a type specimen book</p>\n" +
        "                        <div class=\"icons\">\n" +
        "                            <i class=\"fab fa-facebook-f\" id=\"demo\" onclick=document.getElementById(\"demo\").innerHTML=\"ViewProfile\"></i>\n" +
        "                            <i class=\"fab fa-twitter\"></i>\n" +
        "                            <i class=\"fab fa-google-plus-g\"></i>\n" +
        "                        </div>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-2\">\n" +
        "                    <div class=\"content\">\n" +
        "                        <div class=\"icon\">\n" +
        "                            <i class=\"fas fa-paw\"></i>\n" +
        "                            &nbsp&nbsp&nbsp<span>Helpful Links</span>\n" +
        "                        </div>\n" +
        "                        <ul>\n" +
        "                            <li class=\"item\"> Pet Dictionary</li>\n" +
        "                            <li>Help Links</li>\n" +
        "                            <li>Pet Attitudes</li>\n" +
        "                            <li>Call a Doctor</li>\n" +
        "                            <li>Help a Pet</li>\n" +
        "                        </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-2\">\n" +
        "                    <div class=\"content\">\n" +
        "                        <div class=\"icon\">\n" +
        "                            <i class=\"fas fa-paw\"></i>\n" +
        "                            &nbsp&nbsp&nbsp<span>Overview</span>\n" +
        "                        </div>\n" +
        "                            <ul>\n" +
        "                                <li class=\"item\">Adopt a Pet</li>\n" +
        "                                <li >Create Awareness</li>\n" +
        "                                <li>Join Campaign</li>\n" +
        "                            </ul>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-4\">\n" +
        "                    <div class=\"content\">\n" +
        "                            <i class=\"fas fa-paw\"></i>\n" +
        "                            &nbsp&nbsp&nbsp<span>Subscribe</span>\n" +
        "                        <input class=\"item\" id=\"prompt\" type=\"text\" name=\"...\"  placeholder=\"Your Email Address\"><br>\n" +
        "                        <p id=\"note\">*&nbsp&nbsp We do not spam</p>\n" +
        "                        <img src=\"imgs/footer_logo_img (1).png\" class=\"img1\"/>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>\n" +
        "        <div class=\"finally\">\n" +
        "            <div class=\"row\">\n" +
        "                <div class=\"col-md-4\">\n" +
        "                    <div class=\"text1\">\n" +
        "                        <p>Copyright 2016 Pet Shop . All right reserved</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "                <div class=\"col-md-6\"></div>\n" +
        "                <div class=\"col-md-2\">\n" +
        "                    <div class=\"text2\">\n" +
        "                        <p>Terms &nbsp&nbsp&nbspPrivacy</p>\n" +
        "                    </div>\n" +
        "                </div>\n" +
        "            </div>\n" +
        "        </div>"


}
var ft = document.getElementById("footer");
ft.innerHTML = footer();