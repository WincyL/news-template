import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BarChartStackedBySign} from './BarChartStackedBySign';
import { SimpleLineChart } from './SimpleLineChart';
import { SimplePieChart } from './SimplePieChart';
import { FadeInParagraph } from './FadeInParagraph';
import { BottomDeco, BottomRightDeco, LeftDeco, RightDeco, TopRightDeco } from './utils/LineDeco';

function App() {

  const [screenWidth, setScreenWidth] = useState<number>(0);

  const body = useRef<HTMLDivElement | null>(null);
  const [pageWidth, setPageWidth] = useState<number>(0);

  useEffect(() =>{

    const onresize = () =>{
      setScreenWidth(window.innerWidth);
      setPageWidth(body.current!.clientWidth);
    };


    window.addEventListener('resize', onresize);
    onresize();

    return () =>{
      window.removeEventListener('resize', onresize);
    }
  }, [])

  return (
    <div className=' relative w-full h-fit overflow-clip font-serif text-[#282b2e]'>

      <div ref={body} className=' flex flex-col justify-center items-center mt-5 ml-12 mr-12 lg:ml-[200px] lg:mr-[200px] gap-8 text-2xl font-thin'
        style={{
          lineHeight: '2.5rem'
        }}>

        <div className=' w-full flex flex-col justify-start items-start text-lg'
          style={{
            lineHeight: '1.8rem'
          }}>
          <p className=' text-3xl md:text-5xl font-bold mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div className=' w-full flex flex-col md:flex-row justify-between items-start'>
            <p className=' text-gray-400 mb-5'>Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo.</p>
            <p className=' text-gray-400 mb-5'>7 Nov, 2023</p>
          </div>

          <div className='w-full flex justify-center items-center'>
            <img src='./images/newspaper.png' className='contain'  />
          </div>
          <p className='text-lg text-center'>lacus lorem, bibendum at magna id, tempor convallis ipsum.</p>
        </div>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci. Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.</p>
        
        <p className=' text-3xl text-center w-full font-semibold'>Donec eu faucibus ante</p>
        <div className=' w-full relative flex justify-center items-center'>
          <BottomDeco bottom={0} />
        </div>

        <FadeInParagraph text="Ut eu vehicula massa, vitae interdum massa. Phasellus eget lorem sollicitudin, iaculis est vel, suscipit sapien. Nam eu fringilla urna. Nulla elementum, urna at cursus tempor, ex mi pulvinar odio, at condimentum sapien eros ut urna. Nam a massa tellus. Donec et eleifend arcu. Sed sit amet ante arcu. Nulla porta, elit lacinia pellentesque elementum, ex metus aliquam nibh, ut mattis urna diam non lacus. Maecenas vel pellentesque lacus. Sed tristique nisl vestibulum magna efficitur, ut efficitur erat suscipit. Nam vitae leo in erat vulputate vulputate eu ut massa. Sed ut tortor eu sem vehicula pharetra sed eu risus. Vivamus tempus metus at lectus ultrices, at rhoncus risus sodales. Proin finibus, leo vel condimentum posuere, risus odio sagittis sem, eu ornare nibh nibh sed nibh. Maecenas viverra diam ut massa malesuada, id gravida turpis pellentesque." />
        
        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>

        <FadeInParagraph text="Sed lacus lorem, bibendum at magna id, tempor convallis ipsum. Proin convallis placerat sem. Nam et eros in ligula vehicula bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula tellus a dolor consectetur maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis molestie placerat sollicitudin. Cras at urna consequat, varius massa vitae, faucibus sem. Sed auctor leo nulla, sed lacinia dui cursus et. Praesent quis ex blandit, hendrerit augue nec, rutrum sapien. Nullam et magna quis sem aliquet lobortis sit amet ac enim."/>
        

        <div className=' w-full relative flex justify-center items-center'>
          <TopRightDeco right={-30} top={0} />
        </div>
        <p className=' text-3xl text-left w-full font-semibold'>Donec eu faucibus ante</p>
        
        <p>Nullam lectus elit, viverra at dignissim vitae, hendrerit mattis ligula. Praesent sit amet scelerisque lectus. Ut scelerisque sem leo, ac lobortis mauris viverra sit amet. Sed sed purus quis nisl auctor cursus. Ut convallis vel risus pharetra bibendum. Ut eu lectus eros. Suspendisse semper tellus nec lectus viverra aliquam. Etiam blandit lorem sit amet risus suscipit pretium. Ut mattis pellentesque nibh, a tempus nisi dapibus ut.</p>
        <p>Aenean suscipit eros eu placerat pulvinar. Pellentesque a porta orci, nec sollicitudin erat. Nullam sem odio, scelerisque sit amet metus eu, sagittis consectetur tellus. Morbi laoreet arcu et sapien semper semper. Aliquam accumsan nec justo in hendrerit. Maecenas eget augue sit amet dolor facilisis pulvinar. Ut cursus, nunc in cursus condimentum, ante justo luctus tellus, sed mattis libero tortor non arcu. Proin libero tortor, pulvinar at nulla a, faucibus auctor enim.</p>
        
        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>
        <p>Mauris feugiat hendrerit dolor, sed volutpat nisi elementum id. Nulla tristique, magna pellentesque egestas vulputate, lectus dolor ultrices eros, sed tincidunt felis tellus et orci. Cras ut ultrices felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu faucibus ante. Ut faucibus molestie sem, at auctor urna ultrices ut. Pellentesque imperdiet nisi leo, vel porta nisi convallis vel. Ut mauris ante, hendrerit vel congue sit amet, placerat sed dolor.</p>

        <div className='w-full flex justify-center items-center'>
          <video className='w-full' controls>
            <source src="./images/cute-cat.mp4" type="video/mp4"/>
            our browser does not support the video tag.
          </video>
        </div>
        
        <FadeInParagraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci. Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.' />
        <p>Ut eu vehicula massa, vitae interdum massa. Phasellus eget lorem sollicitudin, iaculis est vel, suscipit sapien. Nam eu fringilla urna. Nulla elementum, urna at cursus tempor, ex mi pulvinar odio, at condimentum sapien eros ut urna. Nam a massa tellus. Donec et eleifend arcu. Sed sit amet ante arcu.</p>
        <p>Nulla porta, elit lacinia pellentesque elementum, ex metus aliquam nibh, ut mattis urna diam non lacus. Maecenas vel pellentesque lacus. Sed tristique nisl vestibulum magna efficitur, ut efficitur erat suscipit. Nam vitae leo in erat vulputate vulputate eu ut massa. Sed ut tortor eu sem vehicula pharetra sed eu risus.</p>
        
        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Nulla posuere tellus non consectetur sodales.
          </p>
          <BarChartStackedBySign width={pageWidth} />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo.</p>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci.</p>
        <p>Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.</p>
      

        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Nulla posuere tellus non consectetur sodales.
          </p>
          <SimpleLineChart width={pageWidth} />
          <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo.</p>
        </div>
        
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci.</p>
        <p>Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.</p>
        <p>Aenean suscipit eros eu placerat pulvinar. Pellentesque a porta orci, nec sollicitudin erat. Nullam sem odio, scelerisque sit amet metus eu, sagittis consectetur tellus. Morbi laoreet arcu et sapien semper semper. Aliquam accumsan nec justo in hendrerit. Maecenas eget augue sit amet dolor facilisis pulvinar. Ut cursus, nunc in cursus condimentum, ante justo luctus tellus, sed mattis libero tortor non arcu. Proin libero tortor, pulvinar at nulla a, faucibus auctor enim. Mauris feugiat hendrerit dolor, sed volutpat nisi elementum id. Nulla tristique, magna pellentesque egestas vulputate, lectus dolor ultrices eros, sed tincidunt felis tellus et orci. Cras ut ultrices felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu faucibus ante. Ut faucibus molestie sem, at auctor urna ultrices ut. Pellentesque imperdiet nisi leo, vel porta nisi convallis vel. Ut mauris ante, hendrerit vel congue sit amet, placerat sed dolor.</p>
        <div className=' w-full relative flex justify-center items-center'>
          <BottomRightDeco bottom={0} right={-30} />
        </div>

        <div className=' w-full flex flex-col md:flex-row justify-start items-start'>
          <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-center font-semibold'>
            <p className='flex w-full justify-center items-center text-center font-semibold'>
              Nulla posuere tellus non consectetur sodales.
            </p>
            <SimplePieChart width={screenWidth < 768 ? pageWidth : pageWidth * 0.5} />
            <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo.</p>
          </div>
          <div className='w-full md:w-1/2 flex flex-col justify-start items-start text-center font-semibold'>
            <p className='flex w-full justify-center items-center text-center font-semibold'>
              Nulla posuere tellus non consectetur sodales.
            </p>
            <SimplePieChart width={screenWidth < 768 ? pageWidth : pageWidth * 0.5} />
            <p className='text-lg text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo.</p>
          </div>
        </div>

        <FadeInParagraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci.' />
        <p>Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.</p>
        <p>Aenean suscipit eros eu placerat pulvinar. Pellentesque a porta orci, nec sollicitudin erat. Nullam sem odio, scelerisque sit amet metus eu, sagittis consectetur tellus. Morbi laoreet arcu et sapien semper semper. Aliquam accumsan nec justo in hendrerit. Maecenas eget augue sit amet dolor facilisis pulvinar. Ut cursus, nunc in cursus condimentum, ante justo luctus tellus, sed mattis libero tortor non arcu. Proin libero tortor, pulvinar at nulla a, faucibus auctor enim. Mauris feugiat hendrerit dolor, sed volutpat nisi elementum id. Nulla tristique, magna pellentesque egestas vulputate, lectus dolor ultrices eros, sed tincidunt felis tellus et orci. Cras ut ultrices felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec eu faucibus ante. Ut faucibus molestie sem, at auctor urna ultrices ut. Pellentesque imperdiet nisi leo, vel porta nisi convallis vel. Ut mauris ante, hendrerit vel congue sit amet, placerat sed dolor.</p>
        
        <div className=' w-full flex justify-center items-center'>
          <div className='w-full lg:w-[70%] aspect-video'>
            <Splide
              options={{
                perPage: 1,
                autoplay: true,
                interval: 4000,
                type: 'loop',
                flickPower: 100,
                perMove: 1,
                pauseOnFocus: false,
                pauseOnHover: true,
                pagination: false
              }}>
              <SplideSlide>
                <div className=' relative w-full flex flex-col justify-start items-start'>
                  <img src="./images/newspaper.png" className=' contain'/>
                  <p className=' absolute bottom-0 p-1 w-full bg-zinc-900 bg-opacity-40 text-lg text-white'>Ut eu vehicula massa, vitae interdum massa. Phasellus eget lorem sollicitudin, iaculis est vel, suscipit sapien. Nam eu fringilla urna. Nulla elementum, urna at cursus tempor, ex mi pulvinar odio, at condimentum sapien eros ut urna.</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className=' relative w-full flex flex-col justify-start items-start'>
                  <img src="./images/newspaper.png" className=' contain'/>
                  <p className=' absolute bottom-0 p-1 w-full bg-zinc-900 bg-opacity-40 text-lg text-white'>Nam a massa tellus. Donec et eleifend arcu. Sed sit amet ante arcu. Nulla porta, elit lacinia pellentesque elementum, ex metus aliquam nibh, ut mattis urna diam non lacus.</p>
                </div>
              </SplideSlide>
              <SplideSlide>
                <div className=' relative w-full flex flex-col justify-start items-start'>
                  <img src="./images/newspaper.png" className=' contain'/>
                  <p className=' absolute bottom-0 p-1 w-full bg-zinc-900 bg-opacity-40 text-lg text-white'>Maecenas vel pellentesque lacus. Sed tristique nisl vestibulum magna efficitur, ut efficitur erat suscipit.</p>
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        
        <p>Sed lacus lorem, bibendum at magna id, tempor convallis ipsum. Proin convallis placerat sem. Nam et eros in ligula vehicula bibendum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vehicula tellus a dolor consectetur maximus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis molestie placerat sollicitudin. Cras at urna consequat, varius massa vitae, faucibus sem. Sed auctor leo nulla, sed lacinia dui cursus et. Praesent quis ex blandit, hendrerit augue nec, rutrum sapien. Nullam et magna quis sem aliquet lobortis sit amet ac enim.</p>
        
        <div className=' w-full relative flex justify-center items-center'>
          <RightDeco right={-30} top={0} />
        </div>
        <p>Nullam lectus elit, viverra at dignissim vitae, hendrerit mattis ligula. Praesent sit amet scelerisque lectus. Ut scelerisque sem leo, ac lobortis mauris viverra sit amet. Sed sed purus quis nisl auctor cursus. Ut convallis vel risus pharetra bibendum. Ut eu lectus eros. Suspendisse semper tellus nec lectus viverra aliquam. Etiam blandit lorem sit amet risus suscipit pretium. Ut mattis pellentesque nibh, a tempus nisi dapibus ut.</p>
        <p>Aenean suscipit eros eu placerat pulvinar. Pellentesque a porta orci, nec sollicitudin erat. Nullam sem odio, scelerisque sit amet metus eu, sagittis consectetur tellus. Morbi laoreet arcu et sapien semper semper. Aliquam accumsan nec justo in hendrerit. Maecenas eget augue sit amet dolor facilisis pulvinar. Ut cursus, nunc in cursus condimentum, ante justo luctus tellus, sed mattis libero tortor non arcu. Proin libero tortor, pulvinar at nulla a, faucibus auctor enim.</p>
        <div className=' w-full relative flex justify-center items-center'>
          <BottomDeco bottom={0} />
        </div>
      </div>

      <div className='w-full h-[10vh] relative mt-[20vh]'>
        <div className="bg-fixed w-full h-full bg-cover absolute opacity-30 -z-50"
          style={{
            backgroundImage: 'url(./images/newspaper.jpeg)'
          }}
        />
      </div>
      <div className=' w-full h-[30vh] bg-zinc-900 flex justify-center items-center text-white font-mono'> 
          <p>End of Reading</p>
      </div>

    </div>
  );
}

export default App;
