import * as azure from '@kulado/azure';

const resourceGroup = new azure.core.ResourceGroup('example', { location: 'West US 2' });

new azure.appservice.TimerSubscription('everyminute', {
    resourceGroup,
    schedule: { second: 0 },
    callback: async (context, args) => {
        console.log(`Timer due at ${args.ScheduleStatus.Last}`);
    }
});
