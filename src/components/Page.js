import React from 'react';

const Page = ({onButtonLogOut}) => {
	return (
		<div className='flex flex-column vh-150 bg-dark-gray'>
				<button 
				onClick={onButtonLogOut}
				className='f7 w-20 ml7 mr0 mb2 mt2 dim br3 bg-light-red shadow-5'>
					Log out
				</button>
			<div className='db center w-80'>
				<a className='no-underline' href={'https://quizizz.com/join?gc=08325392'}> 
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>1. Teren za igru</div> 
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=47221008'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>2. Lopta</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=48793872'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>3. Igrači</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=44337424'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>4. Oprema igrača</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=54298896'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>5. Sudac</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=59934992'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>6. Ostali članovi sudačkog tima</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=40536336'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>7. Trajanje utakmice</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=30837008'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>8. Početak i nastavak igre</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=04098320'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>9. Lopta u igri i izvan igre</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=64063760'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>10. Određivanje ishoda utakmice</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>11. Zaleđe</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>12. Prekršaji i nesportsko ponašanje</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>13. Slobodni udarci</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>14. Kazneni udarac</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>15. Ubacivanje</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>16. Udarac s vrata</div>
				</a>
				<a className='no-underline' href={'https://quizizz.com/join?gc=63277328'}>
					<div className='f6 center dim ph3 pv2 mb2 tc white bg-green w-65 br3 shadow-5'>17. Udarac iz kuta</div>
				</a>
			</div>
		</div>
	);
}

export default Page;