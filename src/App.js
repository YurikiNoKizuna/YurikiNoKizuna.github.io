import './App.css';
import background from './images/background.jpg';
import logoWhite from './images/logo-white.png';
import * as React from 'react';
import { AppBar, Typography, Container, ThemeProvider } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const theme = {}

function App() {
  return (
    <div style={{ backgroundColor:'black', backgroundImage: `url(${background})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', width:'100%', height:'100vh' }}>
      <ThemeProvider theme={theme}>

        <AppBar style={{backgroundColor: 'rgba(0,0,0,0)', boxShadow:'none',  position: 'relative'}}>
          <Container style={{text:'center', lineHeight:'100%', textAlign:'center', height:'100%',  color: 'white', position: 'relative', zIndex: 1, backgroundColor: "rgba(0,0,0,0)"}} >
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              Home
            </Typography>
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              Sobre
            </Typography>
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              Galeria
            </Typography>
            <img src={logoWhite} style={{ marginLeft:'2vh', marginRight:'2vh', width:'8vh'}} />
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              Contato
            </Typography>
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              Agenda
            </Typography>
            <Typography display='inline' variant="h6" style={{ marginLeft:'2vh', marginRight:'2vh', flexGrow: 1 }}>
              FAQ
            </Typography>
          </Container>
        </AppBar>

        <div style={{height:'100vh'}} ></div>

        <Container style={{ color: 'white', position: 'relative', zIndex: 1, backgroundColor: "rgba(0,0,0,0.0)"}} >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus facilisis luctus aliquet. Nunc rutrum augue vitae consectetur maximus. Cras rutrum quam nisi, ut dictum leo accumsan et. In hac habitasse platea dictumst. Nulla aliquam, augue et elementum ultrices, massa ligula aliquam sem, quis imperdiet mauris metus et nulla. Integer scelerisque, ex non iaculis tempor, diam lacus convallis lorem, ac accumsan urna mi non elit. Sed vestibulum rhoncus hendrerit. Duis elit tortor, venenatis eu enim et, aliquam efficitur erat. Aenean vulputate ut ligula a mattis. Suspendisse nisl quam, blandit eu nisl in, iaculis gravida lorem. Aenean tempus ligula sed malesuada lacinia.

        Aliquam justo arcu, rutrum at sodales in, vehicula sit amet felis. Etiam a risus sed nulla finibus lacinia gravida id elit. Nullam aliquam ante vitae molestie porttitor. Donec justo nunc, aliquam id nisl eget, volutpat ullamcorper ipsum. Cras aliquam pellentesque nisi, nec dictum urna pellentesque sit amet. Duis tempus hendrerit posuere. Aenean fermentum non augue vitae posuere. Cras consequat lorem diam, vel imperdiet odio mollis nec. Aenean semper enim sed vulputate ultricies. Aenean in sapien at lacus finibus facilisis quis a lectus.

        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu ullamcorper odio. Quisque id lectus ipsum. Fusce rutrum vel odio a elementum. Duis leo neque, tempus condimentum eros sed, hendrerit ullamcorper tortor. Sed a interdum mauris. Pellentesque consectetur metus et metus ornare, non ornare urna aliquam. Proin lacinia magna nulla, quis convallis diam dapibus ut. Duis condimentum id arcu at lobortis. Pellentesque non convallis massa. Nullam vel rutrum diam. Etiam sagittis ipsum ultrices, faucibus leo eget, accumsan ex. Sed interdum, lacus eget iaculis feugiat, nisl mauris feugiat odio, a facilisis leo est at urna. Fusce accumsan pulvinar magna, in pulvinar velit fermentum eget.

        Proin auctor nunc in ipsum venenatis posuere eu a diam. Proin eros ligula, sollicitudin vitae elementum in, condimentum sed enim. Vivamus ut tortor quis nisi egestas semper in nec magna. Praesent venenatis volutpat elit quis ultrices. Maecenas eget nisi porttitor, blandit risus ornare, suscipit lorem. Fusce sit amet dui interdum, egestas est ac, vulputate lectus. Sed feugiat dui dui, id aliquet purus dignissim ac. Vivamus dignissim magna quis rhoncus iaculis. Nam non elit vitae eros placerat viverra. Etiam dui elit, tincidunt id risus nec, semper euismod tellus. Morbi consectetur varius augue, in tempus lectus tristique sit amet. Vestibulum volutpat varius tristique. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec ut ante eu ipsum tincidunt maximus. Pellentesque quis gravida elit.

        Sed vel lobortis magna. Mauris sed maximus quam, in elementum nibh. Maecenas fermentum velit ut nisi euismod, in mollis augue faucibus. In sodales arcu porttitor, placerat mauris at, varius erat. Sed porta eu nibh ac porta. Quisque quis viverra neque. Donec tristique lacus augue, nec pharetra odio vestibulum eget.

        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin convallis in ante sed sagittis. Integer felis elit, posuere at tempor et, egestas eget nisl. Aliquam vulputate risus felis, in pulvinar neque consequat a. Donec id lacus ex. Ut mi augue, sollicitudin ut sagittis sit amet, ornare eu nunc. Maecenas a sem euismod, varius orci vitae, efficitur enim. Fusce nisl odio, gravida nec iaculis et, pretium ac sapien. Sed nisl nibh, bibendum in nisl at, tempor elementum ante.

        Quisque hendrerit metus non sagittis posuere. Cras eleifend nibh sit amet mi placerat, et convallis tellus iaculis. Ut ac sodales tellus, vitae sollicitudin libero. Nullam tincidunt laoreet lacus non elementum. Vestibulum elementum ligula justo, ac convallis turpis efficitur id. Mauris scelerisque ultricies ligula eu bibendum. Aenean tempus tellus at volutpat vehicula. Duis risus turpis, rutrum id dictum sit amet, tempor vitae enim.

        Praesent id odio egestas, ullamcorper dui fringilla, auctor libero. Cras vehicula cursus dolor in ullamcorper. Quisque velit ante, condimentum nec congue eget, ornare id est. Phasellus turpis velit, finibus sit amet cursus non, eleifend eu ex. Vestibulum at risus sed tellus malesuada elementum at vel diam. Maecenas vel maximus augue, a auctor risus. Duis commodo feugiat ante, eu ullamcorper nibh aliquet at. Nunc consectetur malesuada dolor eleifend viverra. Vestibulum pharetra purus turpis, eget ultrices ante condimentum quis. Pellentesque sodales et metus a feugiat. Mauris et justo malesuada leo egestas dapibus. Ut sit amet orci at ante fringilla feugiat. Ut ornare convallis sodales. Maecenas ac erat ut nisl pulvinar laoreet. Suspendisse in tempus lorem, scelerisque faucibus turpis. Suspendisse sit amet imperdiet enim.

        Duis congue lectus quis luctus dictum. Sed eu est eu enim tempor rutrum ac et dolor. Proin at dolor aliquam, malesuada massa a, interdum ligula. Curabitur tristique diam sit amet condimentum faucibus. Suspendisse interdum elementum mollis. Nulla quam urna, tempor quis porta a, faucibus et felis. In vitae purus eu elit mattis luctus.

        Proin in massa viverra massa tempor molestie. Aliquam ac gravida dui. Cras euismod est sit amet sapien efficitur, sed porta ex condimentum. Nulla id porta nibh, viverra fermentum libero. Pellentesque tempus aliquam erat, eu egestas magna porta ut. Nunc id justo sed nibh vulputate sagittis quis at sapien. Donec vitae vulputate tellus, in semper felis. Curabitur dictum aliquet elementum. Vestibulum ac rutrum orci. Integer at vulputate leo. In vulputate odio elit, eu convallis diam scelerisque et.

        Fusce pellentesque imperdiet purus. Phasellus eget rhoncus est. Pellentesque eleifend dolor nisl, vitae dignissim lorem vestibulum ac. Maecenas justo ligula, convallis sed elementum sed, pharetra rhoncus enim. Proin pretium lorem ut ligula maximus, ac maximus metus porta. Mauris eget risus quis metus volutpat sodales. Quisque semper dictum nibh, a dictum purus. Cras sit amet orci sit amet libero placerat varius. Mauris lacinia sit amet libero ut sagittis. Morbi sed venenatis arcu.

        Aenean nec feugiat diam. Suspendisse iaculis egestas condimentum. Suspendisse cursus neque eu rhoncus suscipit. Aenean commodo quam eu elit scelerisque, et facilisis tortor vulputate. Curabitur id tempus libero. Integer eu mi lacinia, lobortis turpis sit amet, varius nisl. Morbi mattis lacinia tempor. In cursus tempor ipsum, quis ornare mauris pellentesque nec. Maecenas vitae neque at nunc egestas volutpat ut nec nisi. Suspendisse non dui est. Suspendisse pellentesque mattis massa in suscipit.

        Donec non mauris nec ex molestie dictum non ut mi. Nulla maximus ipsum ut porttitor congue. Fusce ullamcorper lacus enim, at aliquet tortor vestibulum nec. Vivamus erat felis, molestie id mattis eget, ullamcorper sed augue. Nunc tincidunt elit laoreet, placerat leo ac, ullamcorper lacus. Mauris mattis augue cursus dolor feugiat pretium. Curabitur malesuada enim quis mauris elementum tempor. Aenean blandit sit amet nisl ut dictum. Sed porttitor ut sapien non hendrerit. Pellentesque sollicitudin tortor nisi, at varius tellus ornare eget. Cras id urna ornare, dapibus risus sodales, egestas velit. Vivamus venenatis ante pulvinar mauris auctor, eleifend placerat dui sagittis. Maecenas nunc nisl, feugiat tempor tortor at, ultrices dictum turpis. Curabitur faucibus pharetra justo, vitae tincidunt urna. Vivamus ut viverra velit. In lobortis nisi a arcu euismod, fermentum euismod nibh feugiat.

        Nam pulvinar, eros eu blandit auctor, odio ligula venenatis dui, eget pretium dui justo in sapien. Mauris dui est, vehicula nec mauris at, pretium imperdiet massa. Nulla ut feugiat nisl. Phasellus sed euismod tortor, et volutpat massa. Morbi ullamcorper nunc a ante commodo, sed tempus tellus euismod. Praesent volutpat mi sit amet magna bibendum bibendum. Sed eget tortor leo.

        Vivamus vel nibh ac nunc laoreet tristique in at leo. Integer sollicitudin hendrerit risus, at consequat lacus pharetra eget. Ut nec metus dictum eros condimentum lobortis efficitur eget nisl. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus lorem arcu, convallis sit amet nulla at, dapibus malesuada dui. Maecenas ut semper ante, quis sodales erat. Aliquam quis tincidunt justo. Quisque velit sapien, congue quis augue in, pulvinar congue elit. Aliquam pellentesque ligula nec ligula porta, a congue felis dictum. Sed lobortis tellus sed odio interdum pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In in lacus eget risus congue iaculis. Morbi ornare id tortor fermentum malesuada. Etiam et libero sem.

        Cras auctor nunc ligula, nec accumsan quam hendrerit at. Aenean cursus posuere nisi, ac eleifend nisl facilisis in. Phasellus ac tincidunt sem. Nullam ultricies posuere ullamcorper. Cras non augue suscipit metus imperdiet tristique. Cras accumsan purus non purus tempus, a suscipit velit dictum. Integer feugiat lectus non posuere tristique. Nunc rutrum odio vitae elit elementum tempus. Aenean ac erat efficitur, euismod ante eu, bibendum sapien.

        Sed eu turpis nisi. Suspendisse suscipit massa quis erat sodales tempus. Nam id facilisis erat, nec porttitor elit. Quisque consectetur gravida ipsum varius iaculis. Praesent eleifend dui eu augue dignissim, a lacinia ante ornare. Suspendisse accumsan lacus vitae erat aliquam, at laoreet libero rutrum. Pellentesque et accumsan mauris. Suspendisse arcu orci, bibendum non tincidunt non, pulvinar nec nunc. Ut vel luctus lorem. Curabitur sed hendrerit tellus. Proin lacus magna, accumsan sed velit vel, accumsan mollis nisl.

        Phasellus dui augue, sodales eget congue in, accumsan nec est. Vestibulum eu tellus sit amet dui mattis suscipit a convallis quam. Vestibulum fermentum cursus felis eu volutpat. Morbi rutrum ornare odio, et aliquam metus aliquet et. Duis feugiat, quam hendrerit posuere imperdiet, magna dolor auctor velit, ac tincidunt justo diam eu sem. Etiam et nisi luctus, aliquet nulla vitae, egestas augue. Proin in augue turpis. Morbi lobortis nulla in purus tempus laoreet. Nam tempus ac nunc ut aliquet. Morbi sagittis purus in elit posuere tempor.

        Ut tincidunt justo quis arcu mollis pharetra. Quisque sodales lobortis ante sed volutpat. Fusce erat velit, laoreet eu sodales eget, dapibus in urna. Cras eleifend ligula urna, sed ullamcorper lacus ornare eget. Nulla feugiat ornare consectetur. Cras eleifend semper pharetra. Proin ut mauris ex. Phasellus dictum magna nec blandit bibendum. Proin non posuere nulla.

        Donec egestas erat ac nibh interdum mollis. Pellentesque eget libero sit amet nibh fermentum tincidunt aliquet pellentesque ligula. Nam nisl tortor, pretium in ipsum eget, dapibus suscipit lorem. Donec venenatis sem id finibus bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla a odio nec mauris vulputate fermentum. Curabitur maximus, urna sed dignissim volutpat, dolor nisi sagittis elit, non pharetra libero ligula non ante. Nulla sodales turpis velit, eget finibus nisl consectetur et. Integer egestas magna imperdiet felis viverra, at maximus neque blandit. Etiam erat arcu, imperdiet a odio in, fermentum tincidunt nulla. Quisque ligula nulla, placerat eget purus non, consectetur ultrices sem. Nulla porta erat tempus arcu interdum posuere. Maecenas accumsan urna vel dapibus ultricies.

        Donec rhoncus volutpat feugiat. Suspendisse ut purus nisl. Sed tempus luctus nisi, nec semper neque blandit vitae. Sed et porttitor est. Quisque ligula purus, blandit non ullamcorper eget, dignissim at orci. Cras consequat orci non nisi semper finibus. Sed sit amet augue eu ipsum elementum dignissim. Duis id finibus felis. Mauris neque turpis, bibendum vel lacus ac, ultrices gravida urna. Quisque leo tellus, porttitor quis erat a, semper molestie nisl.

        Donec sit amet sem sit amet felis eleifend interdum. Donec dignissim consectetur laoreet. Mauris id ex erat. Cras sollicitudin quam ante, quis mattis ipsum mattis eget. Donec efficitur ut leo nec sagittis. Vivamus rhoncus turpis id eleifend cursus. Integer placerat ante sit amet neque vehicula venenatis. Mauris dapibus urna non sem interdum, vitae vestibulum dolor blandit. Phasellus pharetra metus eu massa commodo, at laoreet nisl finibus. Fusce ornare libero eu libero ultricies condimentum. Vivamus ac euismod sem. Maecenas est tortor, viverra sed quam elementum, gravida mollis leo. Cras vitae eleifend ligula.

        Fusce dapibus hendrerit purus, dignissim viverra risus condimentum quis. Duis porta velit at augue vestibulum malesuada. Integer eget rhoncus ligula, eu ultrices libero. Duis maximus eros sed tortor molestie imperdiet. Cras venenatis augue ipsum, pharetra hendrerit ante pretium viverra. Curabitur a sodales lectus. Morbi elementum velit at lobortis consectetur. Integer vehicula est id nunc convallis, eget bibendum dolor pretium. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisis vel orci non bibendum. Donec nec lorem libero. Nam ut sodales erat. Pellentesque condimentum egestas quam vel egestas. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia tempor justo, quis luctus magna euismod eu.
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
