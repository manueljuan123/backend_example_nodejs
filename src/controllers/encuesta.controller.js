const nodemailer = require("nodemailer")

// Esta ruta de e-mail permite enviar encuesta de satisfacción a correo
exports.postEncuesta = (req, res) => {
    const { experiencia, recomendacion, sugerencia } = req.body

    try{
        if (experiencia && recomendacion && sugerencia){                
             var transporter = nodemailer.createTransport({
                 host: "smtp.gmail.com",
                 port: 465,
                 secure: true,
                 auth: {
                     user: process.env.EMAIL_MENSAJERO_NEURO,
                     pass: process.env.PASS_MENSAJERO_NEURO
                 }
             });

             var mailOptions = {
                 from: "Remitente",
                 to: process.env.RECEPCION_PQRS_ENCUESTA,
                 subject: "ENCUESTA DE SATISFACCIÓN",
                 html: `<html xmlns="http://www.w3.org/1999/xhtml">
                 <head>
                     <meta http-equiv="Content-Type" content="text/html; charset=utf-8"><!-- Define el contenido basado en codificación utf-8 (funcionará cuando se vea en la web) -->
                     <meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- Estándar mobile permite elegir como se mostrará nuestra página en los navegadores de estos de dispositivos móviles, especificando el ancho que tendrá la página dentro del navegador -->
                     <title>Responsive</title><!-- Titulo de el correo (funcionará cuando se vea en la web) -->
                     <style type="text/css">
                     /* Estilos para clientes especificos */
                          #outlook a {padding:0;} /* Fuerza al cliente de Outlook a generar un boton para ver en la web de forma nativa. */
                          body{width:100% !important;margin: 0 !important;padding: 0 !important;} .ReadMsgBody{width:100%; !important} .ExternalClass{width:100% !important;}  /* Fuerza a Hotmail a mostrar el email a su ancho completo */
                      
                      /* Plataformas Webkit y Windows Mobile. */
                          body{-webkit-text-size-adjust:none; -ms-text-size-adjust:none;} /* Previene a la plataforma para aplicaciones Webkit y Windows Mobile que reemplace las fuentes determinadas en los estilos. */
                         img {outline:none; text-decoration:none;border:none; -ms-interpolation-mode: bicubic;}
                          a img {border:none;}
                          p {margin: 0px 0px !important;}
                          table td {border-collapse: collapse;}
                          table { border-collapse:collapse; mso-table-lspace:0pt; mso-table-rspace:0pt; }
                          #backgroundTable {margin:0; padding:0; width:100% !important; line-height: 100% !important;}
                      
                     /*################################################*/
                      /* Resolución 640px (iPad) */
                      /*################################################*/
                          @media only screen and (max-width: 640px) {
                              a[href^="tel"], a[href^="sms"] { text-decoration: none;color: #ffffff; pointer-events: none;cursor: default;}
                              .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] { text-decoration: default; color: #ffffff !important;pointer-events: auto;cursor: default;}
                              table[class=devicewidth] {width: 440px!important;text-align:center!important;}
                              table[class=devicewidthinner] {width: 440px!important;text-align:center!important;}
                              td[class="menu"]{text-align:center !important;}
                          }
                      /*##############################################*/
                      /* Resolución 480px (iPhone) */
                      /*##############################################*/
                          @media only screen and (max-width: 480px) {
                              a[href^="tel"], a[href^="sms"] {text-decoration: none; color: #ffffff;pointer-events: none;cursor: default;}
                              .mobile_link a[href^="tel"], .mobile_link a[href^="sms"] {text-decoration: default;color: #ffffff !important;  pointer-events: auto; cursor: default;}
                              table[class=devicewidth] {width: 280px!important;text-align:center!important;}
                              table[class=devicewidthinner] {width: 280px!important;text-align:center!important;}
                              td[class=titulo] {width: 280px!important;text-align:center!important;}
                              img[class="bigimage"]{width: 260px!important;}
                              
                          }
                     </style>
                  </head>
                 <body>
                     <div class="block">
                        <!-- Inicia Bloque 1-->
                         <table width="100%" bgcolor="#f6f4f5" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td>
                                    <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                                       <tbody>
                                          <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="5"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                            <!-- Contenido -->
                                          <tr>
                                             <td align="right" valign="middle" style="font-family: Helvetica, arial, sans-serif; font-size: 10px;color: #999999">
                                                Si no puede ver este email haga <a class="fide-browser-view" href="#" style="text-decoration: none; color: #0db9ea">click aquí</a> 
                                             </td>
                                          </tr>
                                           <!-- /Contenido -->
                                          <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="5"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 1 -->
                     </div>
                     <div class="block">
                        <!-- Bloque 2-->
                         <table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td width="100%">
                                    <table width="600" bgColor="#fafafa" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
                                       <tbody>
                                          <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                       </tbody>
                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 2-->
                     </div>
                     <div class="block">
                        <!-- Bloque 2-->
                         <table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td width="100%">
                                    <table width="600" bgColor="#fafafa" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
                                       <tbody>
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                              <tr>
                                      <td>
                                      <!-- ESLOGAN -->
                                             <tr>
                                                 <td width="100" height="100" align="center" style="font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #000000;line-height: 24px;" align="center" class="menu" st-content="menu">
                                                     <h2 style="text-decoration: none; color: #B7D93D; font-weight: bold;">SOCIEDAD DE NEUROCIENCIAS E IMÁGENES DIAGNÓSTICAS <br>
                                                         <strong style="text-decoration: none; color: #2E338C; font-weight: bold; margin-top: 7px; font-size: 20px;">NEUROIMAGENES S.A</strong></h2>
                                                 </td>
                                             </tr>
                                       <!-- /ESLOGAN -->
                                     </td>
                                         <td width="500" height="50" align="right" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #2c3e50">
                                           &nbsp;
                                         </td>
                                          </tr>
                                         <tr>
                                         <td width="400" height="50" align="left" style="font-family: Helvetica, arial, sans-serif; text-transform: uppercase;font-size: 20px; color: #2E338C; font-weight: bold;">
                                           Encuesta de satisfacción
                                         </td>
                                          </tr>
                                          <tr>
                                         <td width="500" height="20" align="left" style="font-family: Helvetica, arial, sans-serif; font-size: 18px;color: #95a5a6">
                                          Un usuario dentro de la página web ha llenado la encuesta de satisfacción, tome en cuenta estos
                                          datos para conocer la opinión de nuestros pacientes.
                                          </tr>
                                          <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="5"></td>
                                          </tr>
                                           <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="30"></td>
                                          </tr>
                 
                                         <!-- Espacio -->
                                          <tr>
                                             <td width="100%" height="30"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                       </tbody>
                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 2-->
                     </div>
                     <div class="block">
                        <!-- Bloque 2-->
                         <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td width="100%">
                                    <table width="600" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
                                       <tbody>
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                          <tr>
                                              <td>
             
                                                    <!-- Espacio invisible para moviles -->
                                                    <table align="left" border="0" cellpadding="0" cellspacing="0" >
                                                       <tbody>
                                                          <tr>
                                                             <td width="100%" height="30" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <!-- Fin espacio invisible para moviles -->
                                                    <table width="330" align="left" border="0" cellpadding="0" cellspacing="0" class="devicewidthinner">
                                                       <tbody>
                                                          <!-- Titulo -->
                                                          <tr>
                                                             <td style="font-family: Helvetica, arial, sans-serif; font-size: 20px; color: #2E338C; font-weight: bold; text-align:left;line-height: 20px; st-title="leftimage-title">
                                                                OPINIÓN
                                                             </td>
                                                          </tr>
                                                          <!-- /Titulo -->
                                                          <!-- Espacio -->
                                                          <tr>
                                                             <td width="100%" height="20"></td>
                                                          </tr>
                                                          <!-- /Espacio -->
                                                          <!-- Contenido -->
                                                          <tr>
                                                             <td style="font-family: Helvetica, arial, sans-serif; font-size: 18px; color: #505050; text-align:left;line-height: 24px; text-transform: uppercase; st-content="leftimage-paragraph">
                                                                <ul>
                                                                    <li>Experiencia: <strong>${ req.body.experiencia}</strong></li>
                                                                    <li>Recomendación: <strong>${ req.body.recomendacion}</strong></li>
                                                                    <li>Sugerencia: <strong>${ req.body.sugerencia}</strong></li>
                                                                </ul>
                                                             </td>
                                                          </tr>
                                                          <!-- /Contenido -->
                                                          <!-- Espacio -->
                                                          <tr>
                                                             <td width="100%" height="20"></td>
                                                          </tr>
                                                          <!-- /Espacio -->
                                                       </tbody>
                                                    </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 2-->
                     </div>
                     <div class="block">
                        <!-- Bloque 3-->
                         <table width="100%" bgcolor="#fafafa" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td width="100%">
                                    <table width="600" cellpadding="0" cellspacing="0" bgcolor="#fafafa" border="0" align="center" class="devicewidth" >
                                       <tbody>
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- Espacio -->
                                          <tr>
                                              <td>
                                                    <!-- Espacio invisible para moviles -->
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0" >
                                                       <tbody>
                                                          <tr>
                                                             <td width="100%" height="30" style="font-size:1px; line-height:1px; mso-line-height-rule: exactly;">&nbsp;</td>
                                                          </tr>
                                                       </tbody>
                                                    </table>
                                                    <!-- Fin espacio invisible para moviles -->
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 3 -->
                     </div>
                     <div class="block">
                        <!-- Bloque 2-->
                         <table width="100%" bgcolor="#ffffff" cellpadding="0" cellspacing="0" border="0" id="backgroundTable">
                           <tbody>
                              <tr>
                                 <td width="100%">
                                    <table width="600" bgColor="#ffffff" cellpadding="0" cellspacing="0" bgcolor="#ffffff" border="0" align="center" class="devicewidth" >
                                       <tbody>
                                       <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                          <!-- menu -->
                                          <table width="600" cellpadding="0" cellspacing="0" border="0" align="center" class="devicewidth">
                                             <tbody>
                                             <tr>
                                                 <td width="270" valign="center" style="font-family: Helvetica, Arial, sans-serif;font-size: 18px; color: #000000;line-height: 24px; padding: 10px 0;" align="center" class="menu" st-content="menu">
                                                 <a href="https://neuroimagenes.com/" style="text-decoration: none; color: #2E338C; font-weight: bold;">NUESTROS PACIENTES <br /> NUESTRA PRIORIDAD</a>
                                                 </td>
                                             </tr>
                                         </tbody>
                                          </table>
                                          <!-- Fin del Menu -->
                                     
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                         <tr>
                                             <td width="400" align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #95a5a6">
                                                 Calle 3 norte No. 16-17 - Barrio Nueva Cecilia. Armenia, Quindío
                                             </td>
                                         </tr>
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="10"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                          <tr>
                                             <td width="400" align="center" style="font-family: Helvetica, arial, sans-serif; font-size: 15px;color: #95a5a6">
                                                 administracion@neuroimagenes.com
                                             </td>
                                         </tr>
                                         </tr>
                                         <!-- Espacio -->
                                           <tr>
                                             <td height="20"></td>
                                          </tr>
                                          <!-- /Espacio -->
                                         </table>
                                       </tbody>
                                </table>
                                             </td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        <!-- Fin Bloque 2-->
                     </div>
                     
                 </body>
             <html>
                         </body>
                         </html>             
                    `
             }

             transporter.sendMail(mailOptions, (error) => {
                 if (error) {
                     res.status(500).send(error.message)
                 } else {
                     console.log("Email enviado exitosamente")
                     res.status(200).jsonp(req.body);
                 }
             });
             return res.status(200).json({ status: 200, message: "Correo enviado exitosamente", mensaje_enviar: req.body})
             
            } else {
                return res.status(400).json({ status: 400, message: "Petición errada, hacen falta datos requeridos", mensaje_enviar: req.body})
            }
            
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message })
    }
}