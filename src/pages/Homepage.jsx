import React from 'react'
import Layout from '../components/layout'
import PropTypes from "prop-types"

const SectionLayout = ({
  _style,
  _space="md:mx-20 mx-2",
  children
}) => {
  return <section className={`my-12 ${_style} ${_space}`}>{children}</section>
}

SectionLayout.prototype={
  _style: PropTypes.string,
  _space: PropTypes.string,
  children: PropTypes.node.isrequied
}

const Homepage = () => {

  return (
    <>
      <Layout _space="mt-20">
        <SectionLayout _space="">
        <section
          className="hero-section h-[80vh] flex items-center  p-4 "
          // className="grid md:grid-cols-2 bg-primary grid-cols-1 gap-4 my-5"
        >
          <div className=" md:max-w-[60%] md:p-10 max-w-[100%]">
            <h3 className="bg-primary rounded-md font-normal font-quicksand my-5 w-fit px-3 py-1 text-sm">
              Quality Healthcare for Every Step of Your Journey: Your
              Well-being, Our Priority
            </h3>
            <h1 className="font-chakra md:text-3xl text-xl leading-snug tracking-wide font-semibold">
              Empowering Health, Inspiring Lives: Your Wellness Journey Begins
              Here
            </h1>

            <p className="font-medium  my-5 text-sm font-quicksand">
              Welcome to Thuram Health Care where we prioritize your well-being
              above all else. Our commitment is to provide top-notch healthcare
              services that cater to your needs. Whether you require routine
              check-ups, specialized treatment, or ongoing care, our team of
              experienced professionals is dedicated to ensuring you receive the
              best possible care.
            </p>

            {/* <Button clickHandler={() => navigate("/job")} title="Get Started" /> */}
          </div>

          
        </section>
        </SectionLayout>
      
      </Layout>
    </>
  )
}

export default Homepage
