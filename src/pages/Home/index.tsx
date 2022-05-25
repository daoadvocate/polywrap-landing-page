import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Hero } from '../../components/Hero';
import { DemoSection } from '../../components/DemoSection';
import { Features } from '../../components/Features';
import { Testimonials } from '../../components/Testimonials';
import ReactGA from 'react-ga';
import { WrappersSection } from '../../components/Wrappers';
import { fetchWrappers, queryFeaturedWrappers }from '../../components/CMScontent';

console.log("///// Wrapper's Data from the API")
console.log(queryFeaturedWrappers())
console.log("///// wrapper data after mapping with fetchWrappers()")
console.log(fetchWrappers())


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '1400px',
    position: 'relative',
    [theme.breakpoints.up('sm')]: {
      margin: 'auto',
    },
  },
}));

export const Home = () => {
  ReactGA.pageview('home');

  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Hero />
      <DemoSection />
      <Features />
      <Testimonials />
      <WrappersSection /> 

      {/* 
      These two components are used to showcase the code snippets
      through the IDE.tsx component. However, they are duplicated.
      We have to get one working and deprecate the other.
      <WrapperSection /> 
      */}
    </Box>
  );
};
