define([
    'Ember',
    'text!website/js/templates/index.hbs',
    'website/js/views/cv/cv_summary_view',
    'website/js/views/cv/cv_work_experience_view',
    'website/js/views/cv/cv_education_view',
    'website/js/views/cv/cv_self_education_view',
    'website/js/views/cv/cv_skills_view',
    'website/js/views/cv/cv_awards_view',
    'website/js/views/cv/cv_projects_view',
    'website/js/views/cv/cv_recommendations_view',
    'website/js/utils'
],
    function (
        Ember,
        template,
        cvSummaryView,
        cvWorkExperienceView,
        cvEducationView,
        cvSelfEducationView,
        cvSkillsEducationView,
        cvAwardsEducationView,
        cvProjectsView,
        cvRecommendationsView,
        utils
        )
    {
        "use strict";

        return Ember.View.extend({
            defaultTemplate: Ember.Handlebars.compile(template),
            didInsertElement: function () {
                this._super();
                Ember.run.scheduleOnce('afterRender', this, this.afterRenderEvent);
            },
            afterRenderEvent: function () {
                utils.hideMobileNavigationMenu();
            },
            CvSummaryView : cvSummaryView,
            CvWorkExperienceView : cvWorkExperienceView,
            CvEducationView : cvEducationView,
            CvSelfEducationView : cvSelfEducationView,
            CvSkillsEducationView : cvSkillsEducationView,
            CvAwardsEducationView : cvAwardsEducationView,
            CvProjectsView : cvProjectsView,
            CvRecommendationsView : cvRecommendationsView
        });
    }
);
