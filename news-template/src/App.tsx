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

          <div className=' w-full relative flex justify-center items-center'>
          <BottomDeco bottom={0} />
        </div>
        
        <div>
          <p>Once used to carry out underground intelligence work against the Japanese military during the Second World War, an 85-year-old building in Tsim Sha Tsui is now at risk of being demolished despite being well-maintained and loved by the public.</p>
          <p>The historic structure is among approximately 8,800 buildings which heritage advocates like Chan are calling for stronger protection.</p>
        </div>    
        <br></br>
        
        <div>
        <FadeInParagraph text="The city’s only remaining pre-war western-style structure was classified as a grade three building in 2018, meaning it has some merit but did not qualify to be considered as a possible monument. Only those with grade one accreditation are considered with outstanding merit and warrant every effort to be preserved."/>
        
          <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
          </div>

          <FadeInParagraph text="“The Antiquities and Monuments Office seldom receives reports, does not pay attention to our opinions and even ignores them,” said Chan Kwok Ho, founder of Hong Kong Heritage, a non-government organization dedicated to preserving historic buildings."/>
        </div>

        <div className='w-full flex justify-center items-center'>
            <img src='./images/newsphoto.jpg' className='contain'  />
          </div>
          <p className='text-lg text-center'>The four-story shophouse at 190 Nathan Road is Hong Kong’s only remaining pre-World War II European-style building. Photo by Silver Cheung</p>
        </div>

        <div className=' w-full relative flex justify-center items-center'>
          <TopRightDeco right={-30} top={0} />
        </div>
        <p>The historic structure is among approximately 8,800 buildings which heritage advocates like Chan are calling for stronger protection.</p>
        <p>As of 2023, 27 structures have been demolished or substantially altered, according to the Commissioner for Heritage’s Office. In 2017 alone, seven buildings were brought down.</p>

        <p className=' text-3xl text-left w-full font-semibold'>Historic buildings demolished or substantially altered</p>

        <SimpleLineChart02 width={pageWidth} />
        <p>Source: Commissioner for Heritage’s Office</p>

        <p>Despite the government’s effort to develop historic heritage tourism, as announced in the Tourism Industry Development Blueprint 2.0 which is expected to be released next year, critics say monuments like the structure at 190 Nathan Road still don’t receive the appreciation they deserve.</p>
        
        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>
        <p>“People think that old monuments are in expensive locations and should be demolished for new buildings,” said Chan, emphasizing that rapid urbanization, land scarcity, and economic development are factors that adversely impact the preservation of historic structures. A lack of public participation in the process of heritage preservation and commercialisation is one of the major issues advocates call for change.</p>
        <p>“The Antiquities Advisory Board and Antiquities and Monuments Office are mysterious, no one can observe their meetings that decide the fate of the historic structures,” said Chan, He adds that the growing enthusiasm for heritage preservation, as evidenced by the increased participation in local tours and the number of inquiries related to heritage could potentially help in the preservation efforts.</p>

        <div className=' w-full relative flex justify-center items-center'>
          <LeftDeco left={-30} top={0} />
        </div>
        
        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Monthly Statistics on Educattional and Publicity Activities
          </p>
          <SimpleLineChart width={pageWidth} />
          <p>The upward trend in the number of telephone and written enquiries, along with historic guided tours being held. Source: Antiquities Advisory Board </p>
        </div>

        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
          Visitors Figures of Monuments Opened with Assistance from the Antiquities and Monuments Office within one year
          </p>
          <BarChartStackedBySign02 width={pageWidth} />
          <p>An increase in the number of visitors to 30 historic monuments opened with assistance from the government. Source: Antiquities Advisory Board</p>
        </div>

        <p>The key issues Chan raises with Hong Kong's legal framework and policies for cultural heritage preservation include that the overseeing bodies have outdated structures, a slow assessment process, and a lack of expertise in certain important fields like archaeology.</p>
        <p>“Experts of the Antiquities Advisory Board and Antiquities and Monuments Office include architects and businessmen, but there is no expert with actual archaeological background to help, making it difficult to examine, process and conserve the monuments,” Chan said.</p>
        <p>“The Antiquities Advisory Board meets four times a year, and each year it handles a net of 100-200 buildings, but in Hong Kong, there are a total of 8,803 buildings. How many years will it take?”</p>
        <p>In March 2009, the Antiquities Advisory Board announced that the assessment of 1,444 historic buildings in Hong Kong had been completed. As at a meeting on 7 September 2023, the grading of historic buildings was completed for 1,034 historic buildings, meaning it took 14 years to complete about 70% of the work.</p>
        
        <iframe src="https://www.google.com/maps/d/embed?mid=1wUFuJTwSPfZhUIyZHFInTxQbRCajD1yT&ehbc=2E312F" width={pageWidth} height="480"></iframe>
        <p>Map showing 8,803 historic buildings in Hong Kong. Source: Liber Research Community</p>
        
        <p>To protect the buildings, funding is necessary. Since 2008, an average of 7.6 structures have been approved to receive the subsidy from the Financial Assistance for the Maintenance Scheme on Built Heritage, a program by the government. They can be granted up to HK$2 million for heritage maintenance works.</p>
        <p>But with over 8,800 historic buildings all across the city, the current funding process may take too long to restore the cultural relics. </p>


        <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
          Approved Financial Assistance for Maintenance Schenme on Built Heritage
          </p>
          <DataComposedChart width={pageWidth} />
        </div>
        
        <FadeInParagraph text='Chan said the government must develop a blueprint to guide strategic preservation and redevelopment projects to avoid ad hoc approaches and thus the loss of important historical buildings. ' />
        
        <FadeInParagraph text='“Revising the composition of advisory boards, expediting grading reviews, and including public opinion in the decision-making process are what they have to do,” said Chan. ' />    
        <div className=' w-full relative flex justify-center items-center'>
          <RightDeco right={-30} top={0} />
        </div>
        <p>“Those buildings have architectural merit and authenticity. They are worth preserving,” he added. </p>
        
        <div className=' w-full relative flex justify-center items-center'>
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
      {/* <div className='w-full flex justify-center items-center'>
          <video className='w-full' controls>
            <source src="./images/cute-cat.mp4" type="video/mp4"/>
            our browser does not support the video tag.
          </video>
        </div> */}
        {/* <div className=' w-full flex flex-col justify-start items-start bg-slate-50 p-1'>
          <p className='flex w-full justify-center items-center text-center font-semibold'>
            Total Number of Approved Fundings
          </p>
          <BarChartStackedBySign01 width={pageWidth} />
        </div> */}
      <div className=' w-full h-[30vh] bg-zinc-900 flex justify-center items-center text-white font-mono'> 
          <p>End of Reading</p>
      </div>

    </div>
  );
}

export default App;
