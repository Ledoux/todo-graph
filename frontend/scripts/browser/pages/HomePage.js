import React from 'react'
import { connect } from 'react-redux'
import { BellButton,
  Link,
  Section,
  Title,
} from 'transactions-interface-web'
import { CheckInteraction,
  Explore
} from 'transactions-cms-web'
import { ToursSection } from 'transactions-user-web'

import TeleportWelcome from '../components/TeleportWelcome'

const usersExploreOptions = [{ collectionName: 'users',
  entityName: 'user',
  maxDisplayCount: 3,
  RightInteractionComponent: CheckInteraction
}]

const HomePage = props => {
  const { api,
    firstName,
    onboardingHelpers,
    onboardingHref,
    tourUsers
  } = props
  return (
    <main className='main page home-page'>
      {
        onboardingHref && onboardingHelpers && (
          <Section extraClass='home-page__tutorial p3'>
            <Link href={onboardingHref}>
              Start the on boarding!
            </Link>
          </Section>
        )
      }
      <Section extraClass='home-page__welcome'>
        <TeleportWelcome {...JSON.parse(window.TELEPORT_WELCOME_STRING)} />
      </Section>
      {
        firstName && (
          <Section extraClass='home-page__explore p3'>
            <p className='home-page__explore__title center mb2 h2'>
              Use {'<'}Explore{' />'} to quick search on your entities!
            </p>
            <Title icon='experts' text='USERS' />
            <Explore
              getRequestQuery={query => {
                // attributes in the user objects
                // are contained into the nested local object
                const requestQuery = {}
                Object.keys(query)
                  .forEach(queryKey => {
                    const requestQueryKey = queryKey.replace(/_in_/g, '')
                      .replace('_or_', '_or__in_local.')
                      .replace(/_OR_/g, '_OR__in_local.')
                    requestQuery[requestQueryKey] = query[queryKey]
                  })
                return requestQuery
              }}
              inputTemplate='_or__in_firstName_OR__in_lastName_OR__in_email:{{value}}'
              isAdd
              label='users'
              options={usersExploreOptions}
              placeholder='search for users' />
          </Section>
        )
      }
      {
        !firstName && tourUsers && tourUsers.length > 0 && api &&
          api.tourPath && <ToursSection path={api.tourPath} users={tourUsers} />
      }
    </main>
  )
}

function mapStateToProps ({ user: { firstName },
  tutorial,
  tour: { currentTourUser,
    users
  }
}) {
  const onboardingTutorialKey = currentTourUser && `${currentTourUser.modeName}Onboardings`
  const onboardingHelpers = currentTourUser && currentTourUser.modeName &&
    tutorial[onboardingTutorialKey]
  const onboardingHref = currentTourUser && currentTourUser.modeName &&
    `/dashboard?tutorialCollectionName=${onboardingTutorialKey}`
  return { currentTourUser,
    firstName,
    onboardingHelpers,
    onboardingHref,
    tourUsers: users
  }
}
export default connect(mapStateToProps)(HomePage)
