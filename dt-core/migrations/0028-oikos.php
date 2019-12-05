<?php

class Disciple_Tools_Migration_0028 extends Disciple_Tools_Migration {
    public function up() {
        /**
         * Change media type to access type.
         */
        global $wpdb;
        $wpdb->query( "
            UPDATE $wpdb->postmeta
            SET meta_value = 'access'
            WHERE meta_key = 'type'
            AND meta_value = 'media'
        " );

    }

    public function down() {
    }

    public function test() {
    }


    public function get_expected_tables(): array {
        return [];
    }
}
