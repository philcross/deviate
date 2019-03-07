<?php

use Illuminate\Database\Seeder;
use App\Models\Usergroups\Ability;
use App\Models\Usergroups\AbilityGroup;

class AbilitySeeder extends Seeder
{
    private $groups = [
        [
            'name'        => 'User Management',
            'icon'        => 'la la-users',
            'description' => 'Contains all the abilities required for managing users in your organisation',
            'abilities'   => [
                [
                    'name'        => 'Search Users',
                    'description' => 'Allows users to search all the users within your organisation',
                    'ability_key' => 'users.search',
                ],
                [
                    'name'        => 'Create Users',
                    'description' => 'Allows users to create new users within your organisation',
                    'ability_key' => 'users.create',
                ],
                [
                    'name'        => 'Edit Core Details',
                    'description' => 'Allows users to edit core details of another user',
                    'ability_key' => 'users.edit.core_details',
                ],
                [
                    'name'        => 'Edit Avatar',
                    'description' => 'Allows users to edit another users avatar',
                    'ability_key' => 'users.edit.avatar',
                ],
                [
                    'name'        => 'Edit Usergroups',
                    'description' => 'Allows users to change what usergroups another user is a member of',
                    'ability_key' => 'users.edit.usergroups',
                ],
                [
                    'name'        => 'Deactivate / Activate User',
                    'description' => 'Allows users to deactivate or activate users within your organisation',
                    'ability_key' => 'users.edit.activation',
                ],
                [
                    'name'        => 'Delete Users',
                    'description' => 'Allows users to delete deactivated users within your organisation',
                    'ability_key' => 'users.delete',
                ],
            ],
        ],
        [
            'name'        => 'Usergroup Management',
            'icon'        => 'la la-list_alt',
            'description' => 'Contains all the abilities required for managing usergroups in your organisation',
            'abilities'   => [
                [
                    'name'        => 'Search Usergroups',
                    'description' => 'Allows users to list all usergroups in your organisation',
                    'ability_key' => 'usergroups.search',
                ],
                [
                    'name'        => 'Create Usergroup',
                    'description' => 'Allows users to create a new usergroup',
                    'ability_key' => 'usergroups.create',
                ],
                [
                    'name'        => 'Edit Usergroups Core Details',
                    'description' => 'Allows users to edit a usergroups core details',
                    'ability_key' => 'usergroups.edit.core_details',
                ],
                [
                    'name'        => 'Edit Abilities',
                    'description' => 'Allows users to edit the abilities associated with a usergroup',
                    'ability_key' => 'usergroups.edit.abilities',
                ],
                [
                    'name'        => 'Edit Members',
                    'description' => 'Allows users to add or remove members within a usergroup',
                    'ability_key' => 'usergroups.edit.members',
                ],
                [
                    'name'        => 'Delete Usergroups',
                    'description' => 'Allows users to delete usergroups within your organisation',
                    'ability_key' => 'usergroups.delete',
                ],
            ]
        ],
        [
            'name'        => 'Organisation',
            'icon'        => 'la la-cog',
            'description' => 'Contains all the abilities required for managing the details of your organisation',
            'abilities'   => [
                [
                    'name'        => 'Edit Core Details',
                    'description' => 'Allows users to update the details of your organisation',
                    'ability_key' => 'organisation.edit',
                ],
                [
                    'name'        => 'Manage Billing',
                    'description' => 'Allows users to manage the billing details of your organistaion, including managing payment methods and viewing invoices',
                    'ability_key' => 'organisation.billing',
                ],
                [
                    'name'        => 'Manage Plan',
                    'description' => 'Allows users to manage the plan your organistion is subscribed to',
                    'ability_key' => 'organisation.plan',
                ],
            ]
        ],
        [
            'name'        => 'Activities',
            'description' => 'Contains all the abilities required for managing activities within your organisation',
            'icon'        => 'la la-plane',
            'abilities'   => [
                [
                    'name'        => 'Access Activities',
                    'description' => 'Allows users to list activity collections and activities within the collections',
                    'ability_key' => 'activities.access',
                ],
                [
                    'name'        => 'Create Collection',
                    'description' => 'Allows users to create new activity collections',
                    'ability_key' => 'activities.collections.create',
                ],
                [
                    'name'        => 'Edit Collections',
                    'description' => 'Allows users to edit the details of existing activity collections',
                    'ability_key' => 'activities.collections.edit',
                ],
                [
                    'name'        => 'Delete Collections',
                    'description' => 'Allows users to delete existing activity collections',
                    'ability_key' => 'activities.collections.delete',
                ],
                [
                    'name'        => 'Create Activity',
                    'description' => 'Allows users to create a new activity',
                    'ability_key' => 'activities.activities.create',
                ],
                [
                    'name'        => 'Edit Activity Details',
                    'description' => 'Allows users to edit the details of any activity',
                    'ability_key' => 'activities.activities.edit.details',
                ],
                [
                    'name'        => 'Edit Activity Staff',
                    'description' => 'Allows users to edit the staff helping on an any activity.',
                    'ability_key' => 'activities.activities.edit.staff',
                ],
                [
                    'name'        => 'Edit Activity Bookings',
                    'description' => 'Allows users to book and unbook users on/from any activity',
                    'ability_key' => 'activities.activities.edit.bookings',
                ],
                [
                    'name'        => 'Edit Activity Invites',
                    'description' => 'Allows users to invite / uninvite users to/from any activity',
                    'ability_key' => 'activities.activities.edit.invites',
                ],
                [
                    'name'        => 'Delete Activity',
                    'description' => 'Allows users to delete any activity',
                    'ability_key' => 'activities.activities.delete',
                ],
            ]
        ]
    ];

    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ($this->groups as $group) {
            $this->createGroup($group);
        }
    }

    private function createGroup($group)
    {
        $groupModel = AbilityGroup::create([
            'name'        => $group['name'],
            'description' => $group['description'],
            'icon'        => $group['icon'],
        ]);

        foreach ($group['abilities'] as $ability) {
            $this->createAbility($groupModel, $ability);
        }
    }

    private function createAbility($group, $ability)
    {
        Ability::create([
            'group_id'    => $group->id,
            'name'        => $ability['name'],
            'ability_key' => $ability['ability_key'],
            'description' => $ability['description'],
        ]);
    }
}
