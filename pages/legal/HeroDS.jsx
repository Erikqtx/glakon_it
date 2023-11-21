/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import ParticlesBackground from "../../components/particles/ParticlesBackground";

const Hero = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ParticlesBackground />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="BssFMkGOLvY"
        onClose={() => setOpen(false)}
      />

      <div className="hero-banner-two position-relative pt-250 lg-pt-200 md-pt-150">
        <Image
          src="/images/shape/shape_26.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-left"
          width={200}
          height={200}
        />
        <Image
          src="/images/shape/shape_27.svg"
          alt="Glakon IT Logo Ansbach Region Nürnberg"
          className="lazy-img shapes shape-right"
          width={200}
          height={300}
        />

        <div className="container">
          <div className="row">
            <div
              className="col-lg-12 col-md-9 m-auto text-center"
              data-aos="fade-up"
            >
              <h1 className="hero-heading fw-normal font-recoleta position-relative">
                <Image
                  src="/images/shape/shape_25.svg"
                  alt="Glakon IT Logo Ansbach Region Nürnberg"
                  className="lazy-img shapes line-shape"
                  width={200}
                  height={40}
                  color={"#f8af3c"}
                />
                Datenschutzerklärung
              </h1>
              <p className="text-lg mb-30 pt-20 lg-mb-50 lg-pt-10">
                Datenschutzerklärung der Glakon IT Agentur
              </p>
              <p className="text-base mb-30 pt-20 lg-mb-50 lg-pt-10"></p>
              <h1>Datenschutz&shy;erkl&auml;rung</h1>
              <h2>1. Datenschutz auf einen Blick</h2>
              <h3>Allgemeine Hinweise</h3>{" "}
              <p>
                Die folgenden Hinweise geben einen einfachen &Uuml;berblick
                dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert,
                wenn Sie diese Website besuchen. Personenbezogene Daten sind
                alle Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Ausf&uuml;hrliche Informationen zum Thema
                Datenschutz entnehmen Sie unserer unter diesem Text
                aufgef&uuml;hrten Datenschutzerkl&auml;rung.
              </p>
              <h3>Datenerfassung auf dieser Website</h3>{" "}
              <h4>
                Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser
                Website?
              </h4>{" "}
              <p>
                Die Datenverarbeitung auf dieser Website erfolgt durch den
                Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem
                Abschnitt &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in
                dieser Datenschutzerkl&auml;rung entnehmen.
              </p>{" "}
              <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
              <p>
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
                mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die
                Sie in ein Kontaktformular eingeben.
              </p>{" "}
              <p>
                Andere Daten werden automatisch oder nach Ihrer Einwilligung
                beim Besuch der Website durch unsere IT-Systeme erfasst. Das
                sind vor allem technische Daten (z.&nbsp;B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung
                dieser Daten erfolgt automatisch, sobald Sie diese Website
                betreten.
              </p>{" "}
              <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{" "}
              <p>
                Ein Teil der Daten wird erhoben, um eine fehlerfreie
                Bereitstellung der Website zu gew&auml;hrleisten. Andere Daten
                k&ouml;nnen zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>{" "}
              <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{" "}
              <p>
                Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
                Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
                personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem
                ein Recht, die Berichtigung oder L&ouml;schung dieser Daten zu
                verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, k&ouml;nnen Sie diese Einwilligung jederzeit
                f&uuml;r die Zukunft widerrufen. Au&szlig;erdem haben Sie das
                Recht, unter bestimmten Umst&auml;nden die Einschr&auml;nkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
                Weiteren steht Ihnen ein Beschwerderecht bei der
                zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
              </p>{" "}
              <p>
                Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
              <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{" "}
              <p>
                Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
                ausgewertet werden. Das geschieht vor allem mit sogenannten
                Analyseprogrammen.
              </p>{" "}
              <p>
                Detaillierte Informationen zu diesen Analyseprogrammen finden
                Sie in der folgenden Datenschutzerkl&auml;rung.
              </p>
              <h2>2. Hosting</h2>
              <p>
                Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
              </p>
              <h3>Hetzner</h3>{" "}
              <p>
                Anbieter ist die Hetzner Online GmbH, Industriestr. 25, 91710
                Gunzenhausen (nachfolgend Hetzner).
              </p>{" "}
              <p>
                Details entnehmen Sie der Datenschutzerkl&auml;rung von Hetzner:{" "}
                <a
                  href="https://www.hetzner.com/de/rechtliches/datenschutz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.hetzner.com/de/rechtliches/datenschutz
                </a>
                .
              </p>{" "}
              <p>
                Die Verwendung von Hetzner erfolgt auf Grundlage von Art. 6 Abs.
                1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer
                m&ouml;glichst zuverl&auml;ssigen Darstellung unserer Website.
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt
                die Verarbeitung ausschlie&szlig;lich auf Grundlage von Art. 6
                Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit die
                Einwilligung die Speicherung von Cookies oder den Zugriff auf
                Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                Einwilligung ist jederzeit widerrufbar.
              </p>
              <h4>Auftragsverarbeitung</h4>{" "}
              <p>
                Wir haben einen Vertrag &uuml;ber Auftragsverarbeitung (AVV) zur
                Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt
                es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag,
                der gew&auml;hrleistet, dass dieser die personenbezogenen Daten
                unserer Websitebesucher nur nach unseren Weisungen und unter
                Einhaltung der DSGVO verarbeitet.
              </p>
              <h2>3. Allgemeine Hinweise und Pflicht&shy;informationen</h2>
              <h3>Datenschutz</h3>{" "}
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer
                pers&ouml;nlichen Daten sehr ernst. Wir behandeln Ihre
                personenbezogenen Daten vertraulich und entsprechend den
                gesetzlichen Datenschutzvorschriften sowie dieser
                Datenschutzerkl&auml;rung.
              </p>{" "}
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene
                personenbezogene Daten erhoben. Personenbezogene Daten sind
                Daten, mit denen Sie pers&ouml;nlich identifiziert werden
                k&ouml;nnen. Die vorliegende Datenschutzerkl&auml;rung
                erl&auml;utert, welche Daten wir erheben und wof&uuml;r wir sie
                nutzen. Sie erl&auml;utert auch, wie und zu welchem Zweck das
                geschieht.
              </p>{" "}
              <p>
                Wir weisen darauf hin, dass die Daten&uuml;bertragung im
                Internet (z.&nbsp;B. bei der Kommunikation per E-Mail)
                Sicherheitsl&uuml;cken aufweisen kann. Ein l&uuml;ckenloser
                Schutz der Daten vor dem Zugriff durch Dritte ist nicht
                m&ouml;glich.
              </p>
              <h3>Hinweis zur verantwortlichen Stelle</h3>{" "}
              <p>
                Die verantwortliche Stelle f&uuml;r die Datenverarbeitung auf
                dieser Website ist:
              </p>{" "}
              <p>
                Glakon IT Agentur e.K.
                <br />
                Rosenbadstra&szlig;e 7<br />
                91522 Ansbach
              </p>
              <p>
                Telefon: 0981 97766644
                <br />
                E-Mail: info@glakon.de
              </p>
              <p>
                Verantwortliche Stelle ist die nat&uuml;rliche oder juristische
                Person, die allein oder gemeinsam mit anderen &uuml;ber die
                Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z.&nbsp;B. Namen, E-Mail-Adressen o. &Auml;.) entscheidet.
              </p>
              <h3>Speicherdauer</h3>{" "}
              <p>
                Soweit innerhalb dieser Datenschutzerkl&auml;rung keine
                speziellere Speicherdauer genannt wurde, verbleiben Ihre
                personenbezogenen Daten bei uns, bis der Zweck f&uuml;r die
                Datenverarbeitung entf&auml;llt. Wenn Sie ein berechtigtes
                L&ouml;schersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gel&ouml;scht,
                sofern wir keine anderen rechtlich zul&auml;ssigen Gr&uuml;nde
                f&uuml;r die Speicherung Ihrer personenbezogenen Daten haben
                (z.&nbsp;B. steuer- oder handelsrechtliche
                Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                L&ouml;schung nach Fortfall dieser Gr&uuml;nde.
              </p>
              <h3>
                Allgemeine Hinweise zu den Rechtsgrundlagen der
                Datenverarbeitung auf dieser Website
              </h3>{" "}
              <p>
                Sofern Sie in die Datenverarbeitung eingewilligt haben,
                verarbeiten wir Ihre personenbezogenen Daten auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO,
                sofern besondere Datenkategorien nach Art. 9 Abs. 1 DSGVO
                verarbeitet werden. Im Falle einer ausdr&uuml;cklichen
                Einwilligung in die &Uuml;bertragung personenbezogener Daten in
                Drittstaaten erfolgt die Datenverarbeitung au&szlig;erdem auf
                Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie in die
                Speicherung von Cookies oder in den Zugriff auf Informationen in
                Ihr Endger&auml;t (z.&nbsp;B. via Device-Fingerprinting)
                eingewilligt haben, erfolgt die Datenverarbeitung
                zus&auml;tzlich auf Grundlage von &sect; 25 Abs. 1 TTDSG. Die
                Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
                Vertragserf&uuml;llung oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich, verarbeiten wir
                Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des
                Weiteren verarbeiten wir Ihre Daten, sofern diese zur
                Erf&uuml;llung einer rechtlichen Verpflichtung erforderlich sind
                auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO. Die
                Datenverarbeitung kann ferner auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO erfolgen. &Uuml;ber
                die jeweils im Einzelfall einschl&auml;gigen Rechtsgrundlagen
                wird in den folgenden Abs&auml;tzen dieser
                Datenschutzerkl&auml;rung informiert.
              </p>
              <h3>Empfänger von personenbezogenen Daten</h3>{" "}
              <p>
                Im Rahmen unserer Gesch&auml;ftst&auml;tigkeit arbeiten wir mit
                verschiedenen externen Stellen zusammen. Dabei ist teilweise
                auch eine &Uuml;bermittlung von personenbezogenen Daten an diese
                externen Stellen erforderlich. Wir geben personenbezogene Daten
                nur dann an externe Stellen weiter, wenn dies im Rahmen einer
                Vertragserf&uuml;llung erforderlich ist, wenn wir gesetzlich
                hierzu verpflichtet sind (z.&nbsp;B. Weitergabe von Daten an
                Steuerbeh&ouml;rden), wenn wir ein berechtigtes Interesse nach
                Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn
                eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim
                Einsatz von Auftragsverarbeitern geben wir personenbezogene
                Daten unserer Kunden nur auf Grundlage eines g&uuml;ltigen
                Vertrags &uuml;ber Auftragsverarbeitung weiter. Im Falle einer
                gemeinsamen Verarbeitung wird ein Vertrag &uuml;ber gemeinsame
                Verarbeitung geschlossen.
              </p>
              <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>{" "}
              <p>
                Viele Datenverarbeitungsvorg&auml;nge sind nur mit Ihrer
                ausdr&uuml;cklichen Einwilligung m&ouml;glich. Sie k&ouml;nnen
                eine bereits erteilte Einwilligung jederzeit widerrufen. Die
                Rechtm&auml;&szlig;igkeit der bis zum Widerruf erfolgten
                Datenverarbeitung bleibt vom Widerruf unber&uuml;hrt.
              </p>
              <h3>
                Widerspruchsrecht gegen die Datenerhebung in besonderen
                F&auml;llen sowie gegen Direktwerbung (Art. 21 DSGVO)
              </h3>{" "}
              <p>
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GR&Uuml;NDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN,
                GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH F&Uuml;R EIN AUF DIESE BESTIMMUNGEN
                GEST&Uuml;TZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF
                DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKL&Auml;RUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN
                WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR
                VERARBEITEN, ES SEI DENN, WIR K&Ouml;NNEN ZWINGENDE
                SCHUTZW&Uuml;RDIGE GR&Uuml;NDE F&Uuml;R DIE VERARBEITUNG
                NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
                &Uuml;BERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG,
                AUS&Uuml;BUNG ODER VERTEIDIGUNG VON RECHTSANSPR&Uuml;CHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>{" "}
              <p>
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH F&Uuml;R DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
              <h3>
                Beschwerde&shy;recht bei der zust&auml;ndigen
                Aufsichts&shy;beh&ouml;rde
              </h3>{" "}
              <p>
                Im Falle von Verst&ouml;&szlig;en gegen die DSGVO steht den
                Betroffenen ein Beschwerderecht bei einer Aufsichtsbeh&ouml;rde,
                insbesondere in dem Mitgliedstaat ihres gew&ouml;hnlichen
                Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                mutma&szlig;lichen Versto&szlig;es zu. Das Beschwerderecht
                besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                gerichtlicher Rechtsbehelfe.
              </p>
              <h3>Recht auf Daten&shy;&uuml;bertrag&shy;barkeit</h3>{" "}
              <p>
                Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
                Einwilligung oder in Erf&uuml;llung eines Vertrags automatisiert
                verarbeiten, an sich oder an einen Dritten in einem
                g&auml;ngigen, maschinenlesbaren Format aush&auml;ndigen zu
                lassen. Sofern Sie die direkte &Uuml;bertragung der Daten an
                einen anderen Verantwortlichen verlangen, erfolgt dies nur,
                soweit es technisch machbar ist.
              </p>
              <h3>Auskunft, Berichtigung und L&ouml;schung</h3>{" "}
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
                jederzeit das Recht auf unentgeltliche Auskunft &uuml;ber Ihre
                gespeicherten personenbezogenen Daten, deren Herkunft und
                Empf&auml;nger und den Zweck der Datenverarbeitung und ggf. ein
                Recht auf Berichtigung oder L&ouml;schung dieser Daten. Hierzu
                sowie zu weiteren Fragen zum Thema personenbezogene Daten
                k&ouml;nnen Sie sich jederzeit an uns wenden.
              </p>
              <h3>Recht auf Einschr&auml;nkung der Verarbeitung</h3>{" "}
              <p>
                Sie haben das Recht, die Einschr&auml;nkung der Verarbeitung
                Ihrer personenbezogenen Daten zu verlangen. Hierzu k&ouml;nnen
                Sie sich jederzeit an uns wenden. Das Recht auf
                Einschr&auml;nkung der Verarbeitung besteht in folgenden
                F&auml;llen:
              </p>{" "}
              <ul>
                {" "}
                <li>
                  Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                  personenbezogenen Daten bestreiten, ben&ouml;tigen wir in der
                  Regel Zeit, um dies zu &uuml;berpr&uuml;fen. F&uuml;r die
                  Dauer der Pr&uuml;fung haben Sie das Recht, die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
                <li>
                  Wenn die Verarbeitung Ihrer personenbezogenen Daten
                  unrechtm&auml;&szlig;ig geschah/geschieht, k&ouml;nnen Sie
                  statt der L&ouml;schung die Einschr&auml;nkung der
                  Datenverarbeitung verlangen.
                </li>{" "}
                <li>
                  Wenn wir Ihre personenbezogenen Daten nicht mehr
                  ben&ouml;tigen, Sie sie jedoch zur Aus&uuml;bung, Verteidigung
                  oder Geltendmachung von Rechtsanspr&uuml;chen ben&ouml;tigen,
                  haben Sie das Recht, statt der L&ouml;schung die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
                <li>
                  Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                  haben, muss eine Abw&auml;gung zwischen Ihren und unseren
                  Interessen vorgenommen werden. Solange noch nicht feststeht,
                  wessen Interessen &uuml;berwiegen, haben Sie das Recht, die
                  Einschr&auml;nkung der Verarbeitung Ihrer personenbezogenen
                  Daten zu verlangen.
                </li>{" "}
              </ul>{" "}
              <p>
                Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
                eingeschr&auml;nkt haben, d&uuml;rfen diese Daten &ndash; von
                ihrer Speicherung abgesehen &ndash; nur mit Ihrer Einwilligung
                oder zur Geltendmachung, Aus&uuml;bung oder Verteidigung von
                Rechtsanspr&uuml;chen oder zum Schutz der Rechte einer anderen
                nat&uuml;rlichen oder juristischen Person oder aus Gr&uuml;nden
                eines wichtigen &ouml;ffentlichen Interesses der
                Europ&auml;ischen Union oder eines Mitgliedstaats verarbeitet
                werden.
              </p>
              <h3>SSL- bzw. TLS-Verschl&uuml;sselung</h3>{" "}
              <p>
                Diese Seite nutzt aus Sicherheitsgr&uuml;nden und zum Schutz der
                &Uuml;bertragung vertraulicher Inhalte, wie zum Beispiel
                Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber
                senden, eine SSL- bzw. TLS-Verschl&uuml;sselung. Eine
                verschl&uuml;sselte Verbindung erkennen Sie daran, dass die
                Adresszeile des Browsers von &bdquo;http://&ldquo; auf
                &bdquo;https://&ldquo; wechselt und an dem Schloss-Symbol in
                Ihrer Browserzeile.
              </p>{" "}
              <p>
                Wenn die SSL- bzw. TLS-Verschl&uuml;sselung aktiviert ist,
                k&ouml;nnen die Daten, die Sie an uns &uuml;bermitteln, nicht
                von Dritten mitgelesen werden.
              </p>
              <h3>Widerspruch gegen Werbe-E-Mails</h3>{" "}
              <p>
                Der Nutzung von im Rahmen der Impressumspflicht
                ver&ouml;ffentlichten Kontaktdaten zur &Uuml;bersendung von
                nicht ausdr&uuml;cklich angeforderter Werbung und
                Informationsmaterialien wird hiermit widersprochen. Die
                Betreiber der Seiten behalten sich ausdr&uuml;cklich rechtliche
                Schritte im Falle der unverlangten Zusendung von
                Werbeinformationen, etwa durch Spam-E-Mails, vor.
              </p>
              <h2>4. Datenerfassung auf dieser Website</h2>
              <h3>Cookies</h3>{" "}
              <p>
                Unsere Internetseiten verwenden so genannte
                &bdquo;Cookies&ldquo;. Cookies sind kleine Datenpakete und
                richten auf Ihrem Endger&auml;t keinen Schaden an. Sie werden
                entweder vor&uuml;bergehend f&uuml;r die Dauer einer Sitzung
                (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem
                Endger&auml;t gespeichert. Session-Cookies werden nach Ende
                Ihres Besuchs automatisch gel&ouml;scht. Permanente Cookies
                bleiben auf Ihrem Endger&auml;t gespeichert, bis Sie diese
                selbst l&ouml;schen oder eine automatische L&ouml;schung durch
                Ihren Webbrowser erfolgt.
              </p>{" "}
              <p>
                Cookies k&ouml;nnen von uns (First-Party-Cookies) oder von
                Drittunternehmen stammen (sog. Third-Party-Cookies).
                Third-Party-Cookies erm&ouml;glichen die Einbindung bestimmter
                Dienstleistungen von Drittunternehmen innerhalb von Webseiten
                (z.&nbsp;B. Cookies zur Abwicklung von
                Zahlungsdienstleistungen).
              </p>{" "}
              <p>
                Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
                technisch notwendig, da bestimmte Webseitenfunktionen ohne diese
                nicht funktionieren w&uuml;rden (z.&nbsp;B. die
                Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies
                k&ouml;nnen zur Auswertung des Nutzerverhaltens oder zu
                Werbezwecken verwendet werden.
              </p>{" "}
              <p>
                Cookies, die zur Durchf&uuml;hrung des elektronischen
                Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen
                erw&uuml;nschter Funktionen (z.&nbsp;B. f&uuml;r die
                Warenkorbfunktion) oder zur Optimierung der Website (z.&nbsp;B.
                Cookies zur Messung des Webpublikums) erforderlich sind
                (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1
                lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage
                angegeben wird. Der Websitebetreiber hat ein berechtigtes
                Interesse an der Speicherung von notwendigen Cookies zur
                technisch fehlerfreien und optimierten Bereitstellung seiner
                Dienste. Sofern eine Einwilligung zur Speicherung von Cookies
                und vergleichbaren Wiedererkennungstechnologien abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage
                dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und &sect; 25
                Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Sie k&ouml;nnen Ihren Browser so einstellen, dass Sie &uuml;ber
                das Setzen von Cookies informiert werden und Cookies nur im
                Einzelfall erlauben, die Annahme von Cookies f&uuml;r bestimmte
                F&auml;lle oder generell ausschlie&szlig;en sowie das
                automatische L&ouml;schen der Cookies beim Schlie&szlig;en des
                Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                Funktionalit&auml;t dieser Website eingeschr&auml;nkt sein.
              </p>{" "}
              <p>
                Welche Cookies und Dienste auf dieser Website eingesetzt werden,
                k&ouml;nnen Sie dieser Datenschutzerkl&auml;rung entnehmen.
              </p>
              <h3>Kontaktformular</h3>{" "}
              <p>
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen,
                werden Ihre Angaben aus dem Anfrageformular inklusive der von
                Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der
                Anfrage und f&uuml;r den Fall von Anschlussfragen bei uns
                gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung
                weiter.
              </p>{" "}
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben
                bei uns, bis Sie uns zur L&ouml;schung auffordern, Ihre
                Einwilligung zur Speicherung widerrufen oder der Zweck f&uuml;r
                die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </p>
              <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>{" "}
              <p>
                Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
                Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
                Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>{" "}
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
                Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erf&uuml;llung
                eines Vertrags zusammenh&auml;ngt oder zur Durchf&uuml;hrung
                vorvertraglicher Ma&szlig;nahmen erforderlich ist. In allen
                &uuml;brigen F&auml;llen beruht die Verarbeitung auf unserem
                berechtigten Interesse an der effektiven Bearbeitung der an uns
                gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
                Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
                wurde; die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Die von Ihnen an uns per Kontaktanfragen &uuml;bersandten Daten
                verbleiben bei uns, bis Sie uns zur L&ouml;schung auffordern,
                Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                f&uuml;r die Datenspeicherung entf&auml;llt (z.&nbsp;B. nach
                abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                gesetzliche Bestimmungen &ndash; insbesondere gesetzliche
                Aufbewahrungsfristen &ndash; bleiben unber&uuml;hrt.
              </p>
              <h2>5. Soziale Medien</h2>
              <h3>Facebook</h3>{" "}
              <p>
                Auf dieser Website sind Elemente des sozialen Netzwerks Facebook
                integriert. Anbieter dieses Dienstes ist die Meta Platforms
                Ireland Limited, 4 Grand Canal Square, Dublin 2, Irland. Die
                erfassten Daten werden nach Aussage von Facebook jedoch auch in
                die USA und in andere Drittl&auml;nder &uuml;bertragen.
              </p>{" "}
              <p>
                Eine &Uuml;bersicht &uuml;ber die Facebook Social-Media-Elemente
                finden Sie hier:{" "}
                <a
                  href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.facebook.com/docs/plugins/?locale=de_DE
                </a>
                .
              </p>{" "}
              <p>
                Wenn das Social-Media-Element aktiv ist, wird eine direkte
                Verbindung zwischen Ihrem Endger&auml;t und dem Facebook-Server
                hergestellt. Facebook erh&auml;lt dadurch die Information, dass
                Sie mit Ihrer IP-Adresse diese Website besucht haben. Wenn Sie
                den Facebook &bdquo;Like-Button&ldquo; anklicken, w&auml;hrend
                Sie in Ihrem Facebook-Account eingeloggt sind, k&ouml;nnen Sie
                die Inhalte dieser Website auf Ihrem Facebook-Profil verlinken.
                Dadurch kann Facebook den Besuch dieser Website Ihrem
                Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
                Anbieter der Seiten keine Kenntnis vom Inhalt der
                &uuml;bermittelten Daten sowie deren Nutzung durch Facebook
                erhalten. Weitere Informationen hierzu finden Sie in der
                Datenschutzerkl&auml;rung von Facebook unter:{" "}
                <a
                  href="https://de-de.facebook.com/privacy/explanation"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://de-de.facebook.com/privacy/explanation
                </a>
                .
              </p>{" "}
              <p>
                Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
                Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit
                widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt
                die Verwendung des Dienstes auf Grundlage unseres berechtigten
                Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in
                den Sozialen Medien.
              </p>{" "}
              <p>
                Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
                Daten auf unserer Website erfasst und an Facebook weitergeleitet
                werden, sind wir und die Meta Platforms Ireland Limited, 4 Grand
                Canal Square, Grand Canal Harbour, Dublin 2, Irland gemeinsam
                f&uuml;r diese Datenverarbeitung verantwortlich (Art. 26 DSGVO).
                Die gemeinsame Verantwortlichkeit beschr&auml;nkt sich dabei
                ausschlie&szlig;lich auf die Erfassung der Daten und deren
                Weitergabe an Facebook. Die nach der Weiterleitung erfolgende
                Verarbeitung durch Facebook ist nicht Teil der gemeinsamen
                Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen
                wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung
                festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
                <a
                  href="https://www.facebook.com/legal/controller_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/controller_addendum
                </a>
                . Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der
                Datenschutzinformationen beim Einsatz des Facebook-Tools und
                f&uuml;r die datenschutzrechtlich sichere Implementierung des
                Tools auf unserer Website verantwortlich. F&uuml;r die
                Datensicherheit der Facebook-Produkte ist Facebook
                verantwortlich. Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen)
                hinsichtlich der bei Facebook verarbeiteten Daten k&ouml;nnen
                Sie direkt bei Facebook geltend machen. Wenn Sie die
                Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
                diese an Facebook weiterzuleiten.
              </p>{" "}
              <p>
                Die Daten&uuml;bertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gest&uuml;tzt.
                Details finden Sie hier:{" "}
                <a
                  href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/EU_data_transfer_addendum
                </a>
                ,{" "}
                <a
                  href="https://de-de.facebook.com/help/566994660333381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://de-de.facebook.com/help/566994660333381
                </a>{" "}
                und{" "}
                <a
                  href="https://www.facebook.com/policy.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/policy.php
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
                </a>
              </p>
              <h3>Instagram</h3>{" "}
              <p>
                Auf dieser Website sind Funktionen des Dienstes Instagram
                eingebunden. Diese Funktionen werden angeboten durch die Meta
                Platforms Ireland Limited, 4 Grand Canal Square, Grand Canal
                Harbour, Dublin 2, Irland.
              </p>{" "}
              <p>
                Wenn das Social-Media-Element aktiv ist, wird eine direkte
                Verbindung zwischen Ihrem Endger&auml;t und dem Instagram-Server
                hergestellt. Instagram erh&auml;lt dadurch Informationen
                &uuml;ber den Besuch dieser Website durch Sie.
              </p>{" "}
              <p>
                Wenn Sie in Ihrem Instagram-Account eingeloggt sind, k&ouml;nnen
                Sie durch Anklicken des Instagram-Buttons die Inhalte dieser
                Website mit Ihrem Instagram-Profil verlinken. Dadurch kann
                Instagram den Besuch dieser Website Ihrem Benutzerkonto
                zuordnen. Wir weisen darauf hin, dass wir als Anbieter der
                Seiten keine Kenntnis vom Inhalt der &uuml;bermittelten Daten
                sowie deren Nutzung durch Instagram erhalten.
              </p>{" "}
              <p>
                Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der
                Einsatz des o.&nbsp;g. Dienstes auf Grundlage von Art. 6 Abs. 1
                lit. a DSGVO und &sect; 25 TTDSG. Die Einwilligung ist jederzeit
                widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt
                die Verwendung des Dienstes auf Grundlage unseres berechtigten
                Interesses an einer m&ouml;glichst umfassenden Sichtbarkeit in
                den Sozialen Medien.
              </p>{" "}
              <p>
                Soweit mit Hilfe des hier beschriebenen Tools personenbezogene
                Daten auf unserer Website erfasst und an Facebook bzw. Instagram
                weitergeleitet werden, sind wir und die Meta Platforms Ireland
                Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2,
                Irland gemeinsam f&uuml;r diese Datenverarbeitung verantwortlich
                (Art. 26 DSGVO). Die gemeinsame Verantwortlichkeit
                beschr&auml;nkt sich dabei ausschlie&szlig;lich auf die
                Erfassung der Daten und deren Weitergabe an Facebook bzw.
                Instagram. Die nach der Weiterleitung erfolgende Verarbeitung
                durch Facebook bzw. Instagram ist nicht Teil der gemeinsamen
                Verantwortung. Die uns gemeinsam obliegenden Verpflichtungen
                wurden in einer Vereinbarung &uuml;ber gemeinsame Verarbeitung
                festgehalten. Den Wortlaut der Vereinbarung finden Sie unter:{" "}
                <a
                  href="https://www.facebook.com/legal/controller_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/controller_addendum
                </a>
                . Laut dieser Vereinbarung sind wir f&uuml;r die Erteilung der
                Datenschutzinformationen beim Einsatz des Facebook- bzw.
                Instagram-Tools und f&uuml;r die datenschutzrechtlich sichere
                Implementierung des Tools auf unserer Website verantwortlich.
                F&uuml;r die Datensicherheit der Facebook bzw.
                Instagram-Produkte ist Facebook verantwortlich.
                Betroffenenrechte (z.&nbsp;B. Auskunftsersuchen) hinsichtlich
                der bei Facebook bzw. Instagram verarbeiteten Daten k&ouml;nnen
                Sie direkt bei Facebook geltend machen. Wenn Sie die
                Betroffenenrechte bei uns geltend machen, sind wir verpflichtet,
                diese an Facebook weiterzuleiten.
              </p>{" "}
              <p>
                Die Daten&uuml;bertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gest&uuml;tzt.
                Details finden Sie hier:{" "}
                <a
                  href="https://www.facebook.com/legal/EU_data_transfer_addendum"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.facebook.com/legal/EU_data_transfer_addendum
                </a>
                ,{" "}
                <a
                  href="https://privacycenter.instagram.com/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacycenter.instagram.com/policy/
                </a>{" "}
                und{" "}
                <a
                  href="https://de-de.facebook.com/help/566994660333381"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://de-de.facebook.com/help/566994660333381
                </a>
                .
              </p>{" "}
              <p>
                Weitere Informationen hierzu finden Sie in der
                Datenschutzerkl&auml;rung von Instagram:{" "}
                <a
                  href="https://privacycenter.instagram.com/policy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacycenter.instagram.com/policy/
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000GnywAAC&status=Active
                </a>
              </p>
              <h2>6. Newsletter</h2>
              <h3>Newsletter&shy;daten</h3>{" "}
              <p>
                Wenn Sie den auf der Website angebotenen Newsletter beziehen
                m&ouml;chten, ben&ouml;tigen wir von Ihnen eine E-Mail-Adresse
                sowie Informationen, welche uns die &Uuml;berpr&uuml;fung
                gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse
                sind und mit dem Empfang des Newsletters einverstanden sind.
                Weitere Daten werden nicht bzw. nur auf freiwilliger Basis
                erhoben. Diese Daten verwenden wir ausschlie&szlig;lich f&uuml;r
                den Versand der angeforderten Informationen und geben diese
                nicht an Dritte weiter.
              </p>{" "}
              <p>
                Die Verarbeitung der in das Newsletteranmeldeformular
                eingegebenen Daten erfolgt ausschlie&szlig;lich auf Grundlage
                Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte
                Einwilligung zur Speicherung der Daten, der E-Mail-Adresse sowie
                deren Nutzung zum Versand des Newsletters k&ouml;nnen Sie
                jederzeit widerrufen, etwa &uuml;ber den
                &bdquo;Austragen&ldquo;-Link im Newsletter. Die
                Rechtm&auml;&szlig;igkeit der bereits erfolgten
                Datenverarbeitungsvorg&auml;nge bleibt vom Widerruf
                unber&uuml;hrt.
              </p>{" "}
              <p>
                Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns
                hinterlegten Daten werden von uns bis zu Ihrer Austragung aus
                dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter
                gespeichert und nach der Abbestellung des Newsletters oder nach
                Zweckfortfall aus der Newsletterverteilerliste gel&ouml;scht.
                Wir behalten uns vor, E-Mail-Adressen aus unserem
                Newsletterverteiler nach eigenem Ermessen im Rahmen unseres
                berechtigten Interesses nach Art. 6 Abs. 1 lit. f DSGVO zu
                l&ouml;schen oder zu sperren.
              </p>{" "}
              <p>
                Daten, die zu anderen Zwecken bei uns gespeichert wurden,
                bleiben hiervon unber&uuml;hrt.
              </p>{" "}
              <p>
                Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre
                E-Mail-Adresse bei uns bzw. dem Newsletterdiensteanbieter ggf.
                in einer Blacklist gespeichert, sofern dies zur Verhinderung
                k&uuml;nftiger Mailings erforderlich ist. Die Daten aus der
                Blacklist werden nur f&uuml;r diesen Zweck verwendet und nicht
                mit anderen Daten zusammengef&uuml;hrt. Dies dient sowohl Ihrem
                Interesse als auch unserem Interesse an der Einhaltung der
                gesetzlichen Vorgaben beim Versand von Newslettern (berechtigtes
                Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
                Speicherung in der Blacklist ist zeitlich nicht befristet.{" "}
                <strong>
                  Sie k&ouml;nnen der Speicherung widersprechen, sofern Ihre
                  Interessen unser berechtigtes Interesse &uuml;berwiegen.
                </strong>
              </p>
              <h2>7. Plugins und Tools</h2>
              <h3>YouTube</h3>{" "}
              <p>
                Diese Website bindet Videos der Website YouTube ein. Betreiber
                der Website ist die Google Ireland Limited
                (&bdquo;Google&ldquo;), Gordon House, Barrow Street, Dublin 4,
                Irland.
              </p>{" "}
              <p>
                Wenn Sie eine unserer Webseiten besuchen, auf denen YouTube
                eingebunden ist, wird eine Verbindung zu den Servern von YouTube
                hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche
                unserer Seiten Sie besucht haben.
              </p>{" "}
              <p>
                Des Weiteren kann YouTube verschiedene Cookies auf Ihrem
                Endger&auml;t speichern oder vergleichbare Technologien zur
                Wiedererkennung verwenden (z.&nbsp;B. Device-Fingerprinting).
                Auf diese Weise kann YouTube Informationen &uuml;ber Besucher
                dieser Website erhalten. Diese Informationen werden u.&nbsp;a.
                verwendet, um Videostatistiken zu erfassen, die
                Anwenderfreundlichkeit zu verbessern und Betrugsversuchen
                vorzubeugen.
              </p>{" "}
              <p>
                Wenn Sie in Ihrem YouTube-Account eingeloggt sind,
                erm&ouml;glichen Sie YouTube, Ihr Surfverhalten direkt Ihrem
                pers&ouml;nlichen Profil zuzuordnen. Dies k&ouml;nnen Sie
                verhindern, indem Sie sich aus Ihrem YouTube-Account ausloggen.
              </p>{" "}
              <p>
                Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden
                Darstellung unserer Online-Angebote. Dies stellt ein
                berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO
                dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
                erfolgt die Verarbeitung ausschlie&szlig;lich auf Grundlage von
                Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs. 1 TTDSG, soweit
                die Einwilligung die Speicherung von Cookies oder den Zugriff
                auf Informationen im Endger&auml;t des Nutzers (z.&nbsp;B.
                Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
                Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Weitere Informationen zum Umgang mit Nutzerdaten finden Sie in
                der Datenschutzerkl&auml;rung von YouTube unter:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
                </a>
              </p>
              <h3>Google Fonts (lokales Hosting)</h3>{" "}
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                so genannte Google Fonts, die von Google bereitgestellt werden.
                Die Google Fonts sind lokal installiert. Eine Verbindung zu
                Servern von Google findet dabei nicht statt.
              </p>{" "}
              <p>
                Weitere Informationen zu Google Fonts finden Sie unter{" "}
                <a
                  href="https://developers.google.com/fonts/faq"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://developers.google.com/fonts/faq
                </a>{" "}
                und in der Datenschutzerkl&auml;rung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <h3>Font Awesome (lokales Hosting)</h3>{" "}
              <p>
                Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
                Font Awesome. Font Awesome ist lokal installiert. Eine
                Verbindung zu Servern von Fonticons, Inc. findet dabei nicht
                statt.
              </p>{" "}
              <p>
                Weitere Informationen zu Font Awesome finden Sie in der
                Datenschutzerkl&auml;rung f&uuml;r Font Awesome unter:{" "}
                <a
                  href="https://fontawesome.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://fontawesome.com/privacy
                </a>
                .
              </p>
              <h3>Google Maps</h3>{" "}
              <p>
                Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die
                Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House,
                Barrow Street, Dublin 4, Irland.
              </p>{" "}
              <p>
                Zur Nutzung der Funktionen von Google Maps ist es notwendig,
                Ihre IP-Adresse zu speichern. Diese Informationen werden in der
                Regel an einen Server von Google in den USA &uuml;bertragen und
                dort gespeichert. Der Anbieter dieser Seite hat keinen Einfluss
                auf diese Daten&uuml;bertragung. Wenn Google Maps aktiviert ist,
                kann Google zum Zwecke der einheitlichen Darstellung der
                Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps
                l&auml;dt Ihr Browser die ben&ouml;tigten Web Fonts in ihren
                Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
              </p>{" "}
              <p>
                Die Nutzung von Google Maps erfolgt im Interesse einer
                ansprechenden Darstellung unserer Online-Angebote und an einer
                leichten Auffindbarkeit der von uns auf der Website angegebenen
                Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
                Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
                oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
                (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
                Die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Die Daten&uuml;bertragung in die USA wird auf die
                Standardvertragsklauseln der EU-Kommission gest&uuml;tzt.
                Details finden Sie hier:{" "}
                <a
                  href="https://privacy.google.com/businesses/gdprcontrollerterms/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.google.com/businesses/gdprcontrollerterms/
                </a>{" "}
                und{" "}
                <a
                  href="https://privacy.google.com/businesses/gdprcontrollerterms/sccs/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://privacy.google.com/businesses/gdprcontrollerterms/sccs/
                </a>
                .
              </p>{" "}
              <p>
                Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
                Datenschutzerkl&auml;rung von Google:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
                </a>
              </p>
              <h3>Google reCAPTCHA</h3>{" "}
              <p>
                Wir nutzen &bdquo;Google reCAPTCHA&ldquo; (im Folgenden
                &bdquo;reCAPTCHA&ldquo;) auf dieser Website. Anbieter ist die
                Google Ireland Limited (&bdquo;Google&ldquo;), Gordon House,
                Barrow Street, Dublin 4, Irland.
              </p>{" "}
              <p>
                Mit reCAPTCHA soll &uuml;berpr&uuml;ft werden, ob die
                Dateneingabe auf dieser Website (z.&nbsp;B. in einem
                Kontaktformular) durch einen Menschen oder durch ein
                automatisiertes Programm erfolgt. Hierzu analysiert reCAPTCHA
                das Verhalten des Websitebesuchers anhand verschiedener
                Merkmale. Diese Analyse beginnt automatisch, sobald der
                Websitebesucher die Website betritt. Zur Analyse wertet
                reCAPTCHA verschiedene Informationen aus (z.&nbsp;B. IP-Adresse,
                Verweildauer des Websitebesuchers auf der Website oder vom
                Nutzer get&auml;tigte Mausbewegungen). Die bei der Analyse
                erfassten Daten werden an Google weitergeleitet.
              </p>{" "}
              <p>
                Die reCAPTCHA-Analysen laufen vollst&auml;ndig im Hintergrund.
                Websitebesucher werden nicht darauf hingewiesen, dass eine
                Analyse stattfindet.
              </p>{" "}
              <p>
                Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
                Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
                berechtigtes Interesse daran, seine Webangebote vor
                missbr&auml;uchlicher automatisierter Aussp&auml;hung und vor
                SPAM zu sch&uuml;tzen. Sofern eine entsprechende Einwilligung
                abgefragt wurde, erfolgt die Verarbeitung ausschlie&szlig;lich
                auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und &sect; 25 Abs.
                1 TTDSG, soweit die Einwilligung die Speicherung von Cookies
                oder den Zugriff auf Informationen im Endger&auml;t des Nutzers
                (z.&nbsp;B. Device-Fingerprinting) im Sinne des TTDSG umfasst.
                Die Einwilligung ist jederzeit widerrufbar.
              </p>{" "}
              <p>
                Weitere Informationen zu Google reCAPTCHA entnehmen Sie den
                Google-Datenschutzbestimmungen und den Google
                Nutzungsbedingungen unter folgenden Links:{" "}
                <a
                  href="https://policies.google.com/privacy?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/privacy?hl=de
                </a>{" "}
                und{" "}
                <a
                  href="https://policies.google.com/terms?hl=de"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://policies.google.com/terms?hl=de
                </a>
                .
              </p>
              <p>
                Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach
                dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF
                ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union
                und den USA, der die Einhaltung europ&auml;ischer
                Datenschutzstandards bei Datenverarbeitungen in den USA
                gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte
                Unternehmen verpflichtet sich, diese Datenschutzstandards
                einzuhalten. Weitere Informationen hierzu erhalten Sie vom
                Anbieter unter folgendem Link:{" "}
                <a
                  href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active
                </a>
              </p>
              <p>
                Quelle:{" "}
                <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
              </p>
            </div>
          </div>
          {/* End .row */}

          <div
            className="illustration-holder position-relative mt-30 lg-mt-80 xs-mt-30"
            data-aos="fade-up"
          >
            {/* /.bg-wrapper */}
          </div>
          {/* /.illustration-holder */}
        </div>
        {/* /.container */}
      </div>
    </>
  );
};

export default Hero;
