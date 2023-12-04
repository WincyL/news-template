import React, { useEffect, useRef, useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { BarChartStackedBySign01} from './BarChartStackedBySign01';
import { BarChartStackedBySign02} from './BarChartStackedBySign02';
import { SimpleLineChart } from './SimpleLineChart';
import { SimpleLineChart02 } from './SimpleLineChart02';
import { DataComposedChart } from './DataComposedCharts';
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
            <p className=' text-gray-400 mb-5'>03 Dec, 2023</p>
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

        <SimpleLineChart02 width={pageWidth} />

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

        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
          Approved Financial Assistance for Maintenance Schenme on Built Heritage
          </p>
          <DataComposedChart width={pageWidth} />
        </div>
        
        <FadeInParagraph text='In 2023-2024, there has 8 applications have been approved for the Financial Assistance for Maintenance Scheme on Built Heritage. The government has provided a total of 1.45 million for maintenance works.' />
        <p>However, the funds currently provided by the government are only enough to deal with an average of 9 to 10 applications in a year, and there are a total of 8,803 heritage in Hong Kong. It will take a certain amount of time to protect all heritage. Therefore, the funds are still not able to bring efficiency to the restoration of cultural relics. Hong Kong still faces the challenge of insufficient resources.</p>
        <p>However, public participation in oversight and planning remains limited. The Antiquities and Monuments Office does not adequately seek or consider public sentiment in its grading and assessment of buildings. It also needs to report on or explain delays and decisions properly.</p>
        
        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Monthly Statistics on Educattional and Publicity Activities
          </p>
          <SimpleLineChart width={pageWidth} />
        </div>
        
        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
          Visitors Figures of Monuments Opened with Assistance from the Antiquities and Monuments Office within on year
          </p>
          <BarChartStackedBySign02 width={pageWidth} />
        </div>

        <FadeInParagraph text='In March 2009, the Antiquities Advisory Board (AAB) announced that the assessment of 1,444 historic buildings in Hong Kong had been completed. As at the meeting on 7 September 2003, the grading of historic buildings was completed for 1,034 historic buildings. It has taken 14 years to complete about 70% of the work.' />    
        <div className=' w-full relative flex justify-center items-center'>
          <RightDeco right={-30} top={0} />
        </div>
        <p>Additionally, not having an overall conservation plan or 'blueprint' to guide strategic preservation and redevelopment decisions has led to an ad hoc approach and the loss of many important historical buildings.</p>
        <p>Reforming aged legislation and adapting systems concerning international best practices, as seen in measures taken in Singapore, could strengthen Hong Kong's preservation efforts. This may involve revising the composition of advisory boards, expediting grading reviews, developing professional expertise, and implementing a long-term strategy and guidelines to balance conservation and development needs. Improving coordination, transparency and public participation in related decision-making would also help address current gaps between policy and community expectations.</p>
        <div className=' w-full relative flex justify-center items-center'>
        <iframe src="https://www.google.com/maps/d/embed?mid=1wUFuJTwSPfZhUIyZHFInTxQbRCajD1yT&ehbc=2E312F" width={pageWidth} height="480"></iframe>
          <BottomDeco bottom={0} />
        </div>
      </div>
      
        {/* <div className=' w-full flex justify-center items-center'>
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
        </div> */}
        
        {/* <p>HAHA</p> */}
        
      {/* <div className='w-full h-[10vh] relative mt-[20vh]'>
        <div className="bg-fixed w-full h-full bg-cover absolute opacity-30 -z-50"
          style={{
            backgroundImage: 'url(./images/newspaper.jpeg)'
          }}
        />
      </div> */}

      <div className=' w-full h-[30vh] bg-zinc-900 flex justify-center items-center text-white font-mono'> 
          <p>End of Reading</p>
      </div>

    </div>
  );
}

export default App;
