import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';



import Porcategoria from './components/pages/Porcategoria';
import TVs from './components/pages/TVs';
import Acao from './components/pages/Acao';
import Comedia from './components/pages/Comedia';
import A2067 from './components/pages/2067';
import Radios from './components/pages/Radios';
import Ficcao from './components/pages/Ficcao';
import Romance from './components/pages/Romance';
import Acertodecontas from "./components/pages/Acertodecontas";
import Aparelhagens from "./components/pages/Aparelhagens";
import Atualidade from './components/pages/Atualidade';
import Diario from './components/pages/Diario';
import Daaz from './components/pages/Daaz';
import Graopara from './components/pages/Graopara';
import Boasnovas from './components/pages/Boasnovas';
import Fmodia from './components/pages/Fmodia';
import Aformadaagua from './components/pages/Aformadaagua';
import Rba from './components/pages/Rba';
import Recordnews from './components/pages/Recordnews';
import Sbt from './components/pages/Sbt';
import Agoraestamossos from './components/pages/Agoraestamossos';
import Assasinatosdopassado from './components/pages/Assasinatosdopassado';
import Airplanevsvolcano from './components/pages/Airplanevsvolcano';
import Ajusticeira from './components/pages/261037';
import Albertnobbs from './components/pages/Albertnobbs';
import Alemdohorizonte from './components/pages/Alemdohorizonte';
import Amorzumbi from './components/pages/Amorzumbi';
import Anjosdanoite from './components/pages/Anjosdanoite';
import Anovaondadoimperador from './components/pages/Anovaondadoimperador';
import Aqualquerpreco from './components/pages/Aqualquerpreco';
import Assasinosdealuguel from './components/pages/Assasinosdealuguel';
import Batalhadosimperios from './components/pages/Batalhadosimperios';
import Bloodrayne3 from './components/pages/Bloodrayne3';
import Cacadoresderecompensas from './components/pages/Cacadoresderecompensas';
import Cargaexplosiva3 from './components/pages/Cargaexplosiva3';
import Chef from './components/pages/Chef';
import Codigodeconduta from './components/pages/Codigodeconduta';
import Coragemparaamar from './components/pages/Coragemparaamar';
import Cosmopolis from './components/pages/Cosmopolis';
import Criatura from './components/pages/Criatura';
import Cubo from './components/pages/Cubo';
import Distrito13o from './components/pages/Distrito13o';
import Duna from './components/pages/Duna';
import Embuscadevinganca from './components/pages/Embuscadevinganca';
import Entreirmaos from './components/pages/Entreirmaos';
import Entreoamoreafama from './components/pages/Entreoamoreafama';
import Finch from './components/pages/Finch';
import Ghostland from './components/pages/Ghostland';
import Homemaranha from './components/pages/Homemaranha';
import Hoteldosdinossauros from './components/pages/Hoteldosdinossauros';
import Jesuskid from './components/pages/Jesuskid';
import Megalodon from './components/pages/Megalodon';
import Minhamaeeumaviagem from './components/pages/Minhamaeeumaviagem';
import Ninja from './components/pages/Ninja';
import Ocaminho from './components/pages/Ocaminho';
import Ocladasadagas from './components/pages/Ocladasadagas';
import Ocontodoscontos from './components/pages/Ocontodoscontos';
import Odespertar from './components/pages/Odespertar';
import Ohomemdamafia from './components/pages/Ohomemdamafia';
import Oimbativelreden from './components/pages/Oimbativelreden';
import Olhosfamintos from './components/pages/Olhosfamintos';
import Oparamo from './components/pages/Oparamo';
import Ospecialistas from './components/pages/Osespecialistas';
import Tophits from './components/pages/Tophits';
import Videoclips from './components/pages/Vdeoclips';
import Osmercenarios2 from './components/pages/Osmercenarios2';
import Psicopataamericano2 from './components/pages/Psicopataamericano2';
import Re1sident from './components/pages/Re1sident';
import Residentevilbem from './components/pages/Residentevilbem';
import Redencao from './components/pages/Redencao';
import Relacaoexplosiva from './components/pages/Relacaoexplosiva';
import Ruslan from './components/pages/Ruslan';
import Sextafeira13 from './components/pages/Sextafeira13';
import Sonic from './components/pages/Sonic';
import Tempo from './components/pages/Tempo';
import Umamorprarecordar from './components/pages/Umamorprarecordar';
import Ummatchsurpresa from './components/pages/Ummatchsurpresa';
import Ummotoristaemapuros from './components/pages/Ummotoristaemapuros';
import Umnegocioderisco from './components/pages/Umnegocioderisco';
import Umpobretaoncsb from './components/pages/Umpobretaoncsb';
import Ascensaoeqdui from './components/pages/Ascensaoeqdui';
import Homemaranha2 from './components/pages/Homemaranha2';
import Supermurali from './components/pages/Supermurali';
import Terror from './components/pages/Terror';
import Suspense from './components/pages/Suspense';
import Stretfp from './components/pages/Stretfp';
import Codinome7 from './components/pages/Codinome7';
import Umjovememapuros from './components/pages/Umjovememapuros';
import Tudopraficarcomela from './components/pages/Tudopraficarcomela';
import Odoadordememorias from './components/pages/Odoadordememorias';
import Atumbadodiabo from './components/pages/Atumbadodiabo';
import Jogandocomoamor from './components/pages/Jogandocomoamor';
import Loucamenteapaixonados from './components/pages/Loucamenteapaixonados';
import Cadaveresardm from './components/pages/Cadaveresardm';
import Agentesduplos from './components/pages/Agentesduplos';
import Aslaminasdje from './components/pages/Aslaminasdje';
import Ogritodamorte from './components/pages/Ogritodamorte';
import Drama from './components/pages/Drama';
import Kv1 from './components/pages/Kv1';
import Osorrisodelaura from './components/pages/Osorrisodelaura';
import Ocomitedd from './components/pages/Ocomitedd';
import Fundingyou from './components/pages/Fundingyou';
import Teste from './components/pages/Teste';
import Fungindodopassado from './components/pages/Fugindodopassado';
import Atravessia from './components/pages/Atravessia';
import Aturmadamonica from './components/pages/Aturmadamonica';
import Series from './components/pages/Series';
import Playlistyou from './components/pages/Playlistyou';
import Playcda from './components/pages/Playcda';
import Playclass from './components/pages/Playclass';
import Magali from './components/pages/Magali';
import Monica from './components/pages/Monica';
import Cebolinha from './components/pages/Cebolinha';
import Playnetmovie from './components/pages/Playnetmovie';
import Cascao from './components/pages/Cascao';
import Milena from './components/pages/Milena';
import Perfeicao from './components/pages/Perfeicao';
import Segredo from './components/pages/Segredo';
import Lama from './components/pages/Lama';
import Asvampiras from './components/pages/Asvampiras';
import Pagandobqmt from './components/pages/Pagandobqmt';
import Aventura from './components/pages/Aventura';
import Gossebump2 from './components/pages/Gossebump2';
import Aeradogelo2 from './components/pages/Aeradogelo2';
import Tresninjas from './components/pages/Tresninjas';
import Ocavaleirod from './components/pages/Ocavaleirod';
import Boltsc from './components/pages/Boltsc';
import Gatodebotas from './components/pages/Gatodebotas';
import Zero7cr from './components/pages/Zero7cr';
import Pedrocoelho2 from './components/pages/Pedrocoelho2';
import Eternos from './components/pages/Eternos';
import Apenasus from './components/pages/Apenasus';
import Operacoese from './components/pages/Operacoese';
import Momentum from './components/pages/Momentum';
import Trovao from './components/pages/Trovao';
import Pokemon from './components/pages/Pokemon';
import Centauro from './components/pages/Centauro';
import Sereia2 from './components/pages/Sereia2';
import Scooby from './components/pages/Scooby';
import Reileao from './components/pages/Reileao';
import Afilhadorei from './components/pages/Afilhadorei';
import Otrapaceiro from './components/pages/Otrapaceiro';
import Deencontrosam from './components/pages/Deencontrosam';
import Acasadomedo from './components/pages/Acasadomedo';
import Details from './components/pages/det';
import Daaz2 from './components/pages/Daaz2';
import Daaz3 from './components/pages/Daaz3';
import Daaz4 from './components/pages/Daaz4';
import Crime from './components/pages/Crime';
import Animacao from './components/pages/Animacao';
import Fantasia from './components/pages/Fantasia';







function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/porcategoria' component={Porcategoria} />
        <Route path='/daaz' component={Daaz} />
        <Route path='/daaz3' component={Daaz3} />
        <Route path='/tvs' component={TVs} />
        <Route path='/radios' component={Radios} />
        <Route path='/acao' component={Acao} />
        <Route path='/animacao' component={Animacao} />
        <Route path='/comedia' component={Comedia} />
        <Route path='/crime' component={Crime} />
        <Route path='/fantasia' component={Fantasia} />
        <Route path='/528085' component={A2067} />
        <Route path='/ficcao' component={Ficcao} />
        <Route path='/romance' component={Romance} />
        <Route path='/91333' component={Acertodecontas} />
        <Route path='/aparelhagens' component={Aparelhagens} />
        <Route path='/atualidade' component={Atualidade} />
        <Route path='/diario' component={Diario} />
        <Route path='/graopara' component={Graopara} />
        <Route path='/boasnovas' component={Boasnovas} />
        <Route path='/fmodia' component={Fmodia} />
        <Route path='/399055' component={Aformadaagua} />
        <Route path='/rba' component={Rba} />
        <Route path='/recordnews' component={Recordnews} />
        <Route path='/sbt' component={Sbt} />
        <Route path='/451877' component={Agoraestamossos} />
        <Route path='/191137' component={Assasinatosdopassado} />
        <Route path='/258210' component={Airplanevsvolcano} />
        <Route path='/261037' component={Ajusticeira} />
        <Route path='/73873' component={Albertnobbs} />
        <Route path='/271404' component={Alemdohorizonte} />
        <Route path='/77067' component={Amorzumbi} />
        <Route path='/277' component={Anjosdanoite} />
        <Route path='/11688' component={Anovaondadoimperador} />
        <Route path='/9422' component={Aqualquerpreco} />
        <Route path='/122800' component={Assasinosdealuguel} />
        <Route path='/300168' component={Batalhadosimperios} />
        <Route path='/12685' component={Bloodrayne3} />
        <Route path='/13387' component={Cargaexplosiva3} />
        <Route path='/209504' component={Cacadoresderecompensas} />
        <Route path='/212778' component={Chef} />
        <Route path='/22803' component={Codigodeconduta} />
        <Route path='/461958' component={Coragemparaamar} />
        <Route path='/49014' component={Cosmopolis} />
        <Route path='/73963' component={Criatura} />
        <Route path='/792678' component={Cubo} />
        <Route path='/15357' component={Distrito13o} />
        <Route path='/438631' component={Duna} />
        <Route path='/390051' component={Embuscadevinganca} />
        <Route path='/7445' component={Entreirmaos} />
        <Route path='/495386' component={Entreoamoreafama} />
        <Route path='/522402' component={Finch} />
        <Route path='/523638' component={Ghostland} />
        <Route path='/557' component={Homemaranha} />
        <Route path='/839440' component={Hoteldosdinossauros} />
        <Route path='/853666' component={Jesuskid} />
        <Route path='/523931' component={Megalodon} />
        <Route path='/82687' component={Minhamaeeumaviagem} />
        <Route path='/25602' component={Ninja} />
        <Route path='/ocaminho' component={Ocaminho} />
        <Route path='/457837' component={Ocladasadagas} />
        <Route path='/314405' component={Ocontodoscontos} />
        <Route path='/77949' component={Odespertar} />
        <Route path='/64689' component={Ohomemdamafia} />
        <Route path='/8922' component={Olhosfamintos} />
        <Route path='/38234' component={Oimbativelreden} />
        <Route path='/800410' component={Oparamo} />
        <Route path='/49021' component={Ospecialistas} />
        <Route path='/tophits' component={Tophits} />
        <Route path='/vdeoclips' component={Videoclips} />
        <Route path='/76163' component={Osmercenarios2} />
        <Route path='/10726' component={Psicopataamericano2} />
        <Route path='/re1sident' component={Re1sident} />
        <Route path='/460458' component={Residentevilbem} />
        <Route path='/redencao' component={Redencao} />
        <Route path='/relacaoexplosiva' component={Relacaoexplosiva} />
        <Route path='/ruslan' component={Ruslan} />
        <Route path='/sextafeira13' component={Sextafeira13} />
        <Route path='/454626' component={Sonic} />
        <Route path='/tempo' component={Tempo} />
        <Route path='/umamorprarecordar' component={Umamorprarecordar} />
        <Route path='/ummatchsurpresa' component={Ummatchsurpresa} />
        <Route path='/ummotoristaemapuros' component={Ummotoristaemapuros} />
        <Route path='/umnegocioderisco' component={Umnegocioderisco} />
        <Route path='/umpobretaoncsb' component={Umpobretaoncsb} />
        <Route path='/333167' component={Ascensaoeqdui} />
        <Route path='/558' component={Homemaranha2} />
        <Route path='/supermurali' component={Supermurali} />
        <Route path='/terror' component={Terror} />
        <Route path='/suspense' component={Suspense} />
        <Route path='/stretfp' component={Stretfp} />
        <Route path='/73499' component={Codinome7} />
        <Route path='/umjovememapuros' component={Umjovememapuros} />
        <Route path='/tudopraficarcomela' component={Tudopraficarcomela} />
        <Route path='/227156' component={Odoadordememorias} />
        <Route path='/17577' component={Atumbadodiabo} />
        <Route path='/672772' component={Jogandocomoamor} />
        <Route path='/60420' component={Loucamenteapaixonados} />
        <Route path='/417180' component={Cadaveresardm} />
        <Route path='/505579' component={Agentesduplos} />
        <Route path='/418808' component={Aslaminasdje} />
        <Route path='/340185' component={Ogritodamorte} />
        <Route path='/drama' component={Drama} />
        <Route path='/556018' component={Kv1} />
        <Route path='/osorrisodelaura' component={Osorrisodelaura} />
        <Route path='/653024' component={Ocomitedd} />
        <Route path='/769749' component={Fundingyou} />
        <Route path='/test' component={Teste} />
        <Route path='/23520' component={Fungindodopassado} />
        <Route path='/391486' component={Atravessia} />
        <Route path='/aturmadamonica' component={Aturmadamonica} />
        <Route path='/series' component={Series} />
        <Route path='/playlistyou' component={Playlistyou} />
        <Route path='/playcda' component={Playcda} />
        <Route path='/playclass' component={Playclass} />
        <Route path='/magali' component={Magali} />
        <Route path='/monica' component={Monica} />
        <Route path='/cebolinha' component={Cebolinha} />
        <Route path='/playnetmovie' component={Playnetmovie} />
        <Route path='/cascao' component={Cascao} />
        <Route path='/milena' component={Milena} />
        <Route path='/perfeicao' component={Perfeicao} />
        <Route path='/segredo' component={Segredo} />
        <Route path='/lama' component={Lama} />
        <Route path='/asvampiras' component={Asvampiras} />
        <Route path='/10358' component={Pagandobqmt} />
        <Route path='/aventura' component={Aventura} />
        <Route path='/gossebump2' component={Gossebump2} />
        <Route path='/950' component={Aeradogelo2} />
        <Route path='/tresninjas' component={Tresninjas} />
        <Route path='/523366' component={Ocavaleirod} />
        <Route path='/13053' component={Boltsc} />
        <Route path='/417859' component={Gatodebotas} />
        <Route path='/zero7cr' component={Zero7cr} />
        <Route path='/522478' component={Pedrocoelho2} />
        <Route path='/524434' component={Eternos} />
        <Route path='/354857' component={Apenasus} />
        <Route path='/118683' component={Operacoese} />
        <Route path='/346808' component={Momentum} />
        <Route path='/trovao' component={Trovao} />
        <Route path='/pokemon' component={Pokemon} />
        <Route path='/852592' component={Centauro} />
        <Route path='/sereia2' component={Sereia2} />
        <Route path='/scooby' component={Scooby} />
        <Route path='/420818' component={Reileao} />
        <Route path='/245842' component={Afilhadorei} />
        <Route path='/79465' component={Otrapaceiro} />
        <Route path='/deencontrosam' component={Deencontrosam} />
        <Route path='476299' component={Acasadomedo} />
        <Route path='/details/:id' component={Details} />
        <Route path='/daaz2' component={Daaz2} />
        <Route path='/daaz4' component={Daaz4} />
        
        
   

        




        


        
      </Switch>

    </Router>
    
  );
}

export default App;
