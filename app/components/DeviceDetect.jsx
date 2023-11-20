"use client"
import Image from 'next/image';
import { useEffect, useState } from 'react'

const DeviceDetect = ({ price }) => {
    const [os, setOs] = useState('');
    const [hide, setHidden] = useState(false);
    const [open, setOpen] = useState(false);

    const isoLink = 'https://apps.apple.com/ge/app/tripcamp/id1614463439';
    const androidLink = 'https://play.google.com/store/apps/details?id=com.pompok.xcolt.pompok&hl=en&gl=US&pli=1';

    useEffect(() => {
        setOpen(!localStorage.getItem('nativeapp:suggestion'))

        const getOperatingSystem = (window) => {
            let operatingSystem = 'Not known';

            if (window.navigator.appVersion.indexOf('Android') !== -1) { operatingSystem = 'Android'; }
            if (window.navigator.appVersion.indexOf('iPhone') !== -1) { operatingSystem = 'Iphone'; }

            return operatingSystem;
        }
  
        setOs(getOperatingSystem(window))
    }, [])

    const closeDialog = () => {
        setOpen(false)
        localStorage.setItem('nativeapp:suggestion', 1)
    }

    const onTouchMove = (event) => {
        // setOpen(false)
        setHidden(true)
        localStorage.setItem('nativeapp:suggestion', 1)
    }

    if (!['Android', 'Iphone'].includes(os)) {
        return <></>
    }

    if (price) {
        return (
            <div className="deviceDetect inner p-5 flex">
                <div>
                    <h4>{price}₾</h4>
                    <span>Night</span>
                </div>
                <div className='flex items-center'>
                    <p>Download app for reservation</p>
                    <a className='block ml-auto font-semibold' href={os === 'Android' ? androidLink : isoLink}>
                        <Image src={os === 'Android' ? '/android2.svg' : '/iso2.svg'} alt='ALT' width={180} height={48} />
                    </a>
                </div>
            </div>
        )
    }

    if (! open) {
        return <></>
    }

    return (
        <div className={`deviceDetect p-5 ${hide ? 'hidden' : ''}`}>
            <span onTouchMove={onTouchMove} className='touch'></span>
            <h3>Make Reservation in App</h3>
            <p>To contact host and make reservation you should download the app</p>
            <a className='block ml-auto font-semibold' href={os === 'Android' ? androidLink : isoLink}>
                <Image src={os === 'Android' ? 'android.svg' : 'iso.svg'} alt='ALT' width={400} height={48} />
            </a>
            <span onClick={closeDialog}>Not now</span>
        </div>
    );
}

export default DeviceDetect;
