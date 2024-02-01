import MaxWidthWrapper from '@/components/MaxWidthWrapper'
import ProductReel from '@/components/ProductReel'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowDownToLine, CheckCircle, Leaf } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const perks = [
    {
      name: 'Instant Delivery',
      icon: ArrowDownToLine,
      description: 'Get your assets deliver to your email in seconds and download them right away.'
    },
    {
      name: 'Guaranteed Quality',
      icon: CheckCircle,
      description: 'Every asset in our platform is varified by our team to ensure highest quality and standards. Not happy? We offer a 30-day refuned guarantee.'
    }, {
      name: 'For the Planet',
      icon: Leaf,
      description: "We've pledged 1% of sales to the preservation and restoration of the natural environment."
    },
  ]
  return (
    <>
      <MaxWidthWrapper>
        <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
          <h1 className='text-4xl sm:text-6xl text-gray-900 font-bold tracking-tight'>
            Your marketplace for high-quality{' '}
            <span className='text-blue-600'>
              digital assets
            </span>
            .
          </h1>
          <p className='mt-6 text-muted-foreground text-lg max-w-prose'>
            Welcome to DigitalHippo. Every asset on our platform is varified
            by our team to ensure our highest quality standards.
          </p>
          <div className='mt-6 flex flex-col md:flex-row gap-4'>
            <Link href='/products' className={buttonVariants()}>Browse Trending</Link>
            <Button variant='ghost'>Our quality promiss &rarr;</Button>
          </div>
        </div>

        <ProductReel title='Brand New' href='/products' query={{ sort: 'desc', limit: 4 }} />
      </MaxWidthWrapper>
      <section className='border-t border-gray-200 bg-gray-50'>
        <MaxWidthWrapper className='py-20'>
          <div className='grid grid-cols-1 grid-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-0'>
            {
              perks.map((perk) => (
                <div key={perk.name} className='text-center md:flex md:items-start md:text-left lg:block lg:text-center'>
                  <div className='md:flex-shrink-0 flex justify-center'>
                    <div className='h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900'>
                      {<perk.icon className='w-1/3 h-1/3' />}
                    </div>
                  </div>
                  <div className='mt-6 md:ml-4 md:mt-0 lg:mt-6 lg:ml-0'>
                    <h3 className='text-base font-medium text-gray-900'>{perk.name}</h3>
                    <p className='mt-3 text-sm text-muted-foreground'>{perk.description}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  )
}
