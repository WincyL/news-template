import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BarChartStackedBySign} from './BarChartStackedBySign';
import { BarChartStackedBySign01} from './BarChartStackedBySign01';
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
          <p className=' text-3xl md:text-5xl font-bold mb-5'>Heritage Advocates Call for Stronger Protections as Historic Sites Continue to be Lost in Hong Kong</p>

          <div className=' w-full flex flex-col md:flex-row justify-between items-start'>
            <p className=' text-gray-400 mb-5'>Group 01</p>
            <p className=' text-gray-400 mb-5'>03 Dec, 2023 time14:50</p>
          </div>

          <div className='w-full flex justify-center items-center'>
            <img src='./images/newsphoto.jpg' className='contain'  />
          </div>
          <p className='text-lg text-center'>190 Nathan Road</p>
        </div>

        <p>Having been introduced six years ago, the "Hong Kong Tourism Industry Development Blueprint" 2.0 is expected to be released next year. The blueprint has always focused heavily on historic heritage tourism. There are, however, concerns about whether the current state of historical buildings in Hong Kong, the grading of cultural heritage buildings, and the direction of conservation efforts have garnered the love and respect they deserve.</p>
        
        <p className=' text-3xl text-center w-full font-semibold'>?Sub title?</p>
        <div className=' w-full relative flex justify-center items-center'>
          <BottomDeco bottom={0} />
        </div>

        <FadeInParagraph text="The priority of heritage tourism has led to the demolition or damage of many historical buildings, whether graded or ungraded, as well as the abandonment or failure of several projects. Although the government previously promised to balance conservation and development, it appears to have chosen development rather than understanding how important 'conservation' is to the entire community."/>
        
        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>

        <FadeInParagraph text="The Hong Kong Government has proposed Revitalizing Historic Buildings Through Partnership Scheme since 2008. However, rapid urbanization, land scarcity, and economic development are impacting historic buildings."/>
        

        <div className=' w-full relative flex justify-center items-center'>
          <TopRightDeco right={-30} top={0} />
        </div>
        <p className=' text-3xl text-left w-full font-semibold'>Historic buildings demolished or substantially altered</p>

        <BarChartStackedBySign01 width={pageWidth} />

        <p>In 2023, there had 27 historic buildings are demolished or significantly altered. Also, the Government's desire to integrate urban development with heritage conservation. </p>
        <p>190 Nathan Road is the only pre-war western style building in Tsim Sha Tsui and has now been transformed into a LEGO store. “Hong Kong Heritage” founder Chan Kwok Ho mentioned that “Urban Studies Institute” and “Walk in Hong Kong” submitted a detail-report to the Antiquities and Monuments Office required to be re-rated 190 Nathan Road as a Grade 1 historic building. However, the application was rejected by the Office. This action made Chan believed Antiquities and Monuments Office often ignored public opinion and sentiment. It also lacked public participation in the process of cultural preservation, and gradually commercialized many buildings. Also loses the original memory and value of the community.</p>
        
        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>
        <p>The Hong Kong Government has provided additional funding of HK$1 billion for the Heritage Conservation Building Fund in the Appropriation Bill 2022. Second, The Development Bureau established the Commissioner for Heritage's Office on 25 April 2008. It offers Financial Assistance for the Maintenance Scheme on Built Heritage for the organization those are non-profit-making organizations. Each application will receive a subsidy of up to HK$2 million for heritage maintenance works.</p>

        {/* <div className='w-full flex justify-center items-center'>
          <video className='w-full' controls>
            <source src="./images/cute-cat.mp4" type="video/mp4"/>
            our browser does not support the video tag.
          </video>
        </div> */}
        
        <BarChartStackedBySign01 width={pageWidth} />

        <FadeInParagraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi efficitur, mi eget tincidunt suscipit, tellus orci venenatis turpis, quis condimentum nibh lacus id justo. Nulla posuere tellus non consectetur sodales. Cras ut est laoreet, faucibus tellus et, tempus sem. Ut sit amet lacus cursus, tempor dolor a, congue orci. Integer tempus rhoncus rutrum. Fusce efficitur lacus quis diam bibendum egestas. Pellentesque eget eros id eros scelerisque faucibus non ac ligula.' />
        <p>In 2023-2024, there has 8 applications have been approved for the Financial Assistance for Maintenance Scheme on Built Heritage. The government has provided a total of 1.45 million for maintenance works.</p>
        <p>However, the funds currently provided by the government are only enough to deal with an average of 9 to 10 applications in a year, and there are a total of 8,803 heritage in Hong Kong. It will take a certain amount of time to protect all heritage. Therefore, the funds are still not able to bring efficiency to the restoration of cultural relics. Hong Kong still faces the challenge of insufficient resources.</p>
        
        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Nulla posuere tellus non consectetur sodales 000000000.
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
