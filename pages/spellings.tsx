import Head from 'next/head';
import { Header } from '../components/header';
import { List } from '../design-system/components/list';
import { Meta } from '../design-system/components/meta';
import { Paragraph } from '../design-system/components/paragraph';
import { Section } from '../design-system/components/section';
import { SidebarNavigation } from '../design-system/components/sidebar-navigation';
import { LeftSidebarLayout } from '../design-system/layouts/left-sidebar-layout';

const Spellings = () => (
  <LeftSidebarLayout sidebar={<SidebarNavigation text='Home' url='/' />}>
    <Meta
      title='Spellings'
      description='Showcasing my favorite attempts of spelling my name'
    />

    <Header
      title='(Mis)spellings'
      subtitle='Showcasing my favorite attempts of spelling my name'
    />
    <Paragraph>
      The name is written as &ldquo;明劼&rdquo; in Chinese, with the first
      character &ldquo;明&rdquo; (&ldquo;Ming&rdquo;) meaning bright, brilliant,
      or clear, and the second character &ldquo;劼&rdquo; (&ldquo;Jie&rdquo;)
      meaning prudent and cautious.
    </Paragraph>
    <Paragraph>
      I created this page purely for the fun of knowing how many different
      variations there are. No need to apologize if you accidentally misspelled
      my name! I don&rsquo;t really care.
    </Paragraph>
    <Section title='Common Misspellings'>
      <List.Container>
        <List.Item left='Minjie' right='' />
        <List.Item left='Mingie' right='' />
        <List.Item left='Minnie' right='' />
        <List.Item left='Maggie' right='Thanks, autocorrect' />
        <List.Item left='Miggie' right='' />
      </List.Container>
    </Section>

    <Section title='Uncommon Misspellings'>
      <List.Container>
        <List.Item left='Mimiggie' right='7/14/2019' />
        <List.Item left='Minejige' right='8/15/2020' />
        <List.Item left='Minge' right='5/22/2021' />
        <List.Item left='Minghe' right='7/1/2021' />
      </List.Container>
    </Section>
  </LeftSidebarLayout>
);

export default Spellings;
